'use strict'

var ownerCtr = `// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Owner
 * @dev Set & change owner
 */
contract Owner {

    address private owner;
    
    // event for EVM logging
    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    
    // modifier to check if caller is owner
    modifier isOwner() {
        // If the first argument of 'require' evaluates to 'false', execution terminates and all
        // changes to the state and to Ether balances are reverted.
        // This used to consume all gas in old EVM versions, but not anymore.
        // It is often a good idea to use 'require' to check if functions are called correctly.
        // As a second argument, you can also provide an explanation about what went wrong.
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    
    /**
     * @dev Set contract deployer as owner
     */
    constructor() {
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        emit OwnerSet(address(0), owner);
    }

    /**
     * @dev Change owner
     * @param newOwner address of new owner
     */
    function changeOwner(address newOwner) public isOwner {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    /**
     * @dev Return owner address 
     * @return address of owner
     */
    function getOwner() external view returns (address) {
        return owner;
    }
}`

var storageCtr = `// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {

    uint256 number;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}
`

var ballotCtr = `// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/** 
 * @title Ballot
 * @dev Implements voting process along with vote delegation
 */
contract Ballot {
   
    struct Voter {
        uint weight; // weight is accumulated by delegation
        bool voted;  // if true, that person already voted
        address delegate; // person delegated to
        uint vote;   // index of the voted proposal
    }

    struct Proposal {
        // If you can limit the length to a certain number of bytes, 
        // always use one of bytes1 to bytes32 because they are much cheaper
        bytes32 name;   // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
    }

    address public chairperson;

    mapping(address => Voter) public voters;

    Proposal[] public proposals;

    /** 
     * @dev Create a new ballot to choose one of 'proposalNames'.
     * @param proposalNames names of proposals
     */
    constructor(bytes32[] memory proposalNames) {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;

        for (uint i = 0; i < proposalNames.length; i++) {
            // 'Proposal({...})' creates a temporary
            // Proposal object and 'proposals.push(...)'
            // appends it to the end of 'proposals'.
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }
    
    /** 
     * @dev Give 'voter' the right to vote on this ballot. May only be called by 'chairperson'.
     * @param voter address of voter
     */
    function giveRightToVote(address voter) public {
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to vote."
        );
        require(
            !voters[voter].voted,
            "The voter already voted."
        );
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;
    }

    /**
     * @dev Delegate your vote to the voter 'to'.
     * @param to address to which vote is delegated
     */
    function delegate(address to) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "You already voted.");
        require(to != msg.sender, "Self-delegation is disallowed.");

        while (voters[to].delegate != address(0)) {
            to = voters[to].delegate;

            // We found a loop in the delegation, not allowed.
            require(to != msg.sender, "Found loop in delegation.");
        }
        sender.voted = true;
        sender.delegate = to;
        Voter storage delegate_ = voters[to];
        if (delegate_.voted) {
            // If the delegate already voted,
            // directly add to the number of votes
            proposals[delegate_.vote].voteCount += sender.weight;
        } else {
            // If the delegate did not vote yet,
            // add to her weight.
            delegate_.weight += sender.weight;
        }
    }

    /**
     * @dev Give your vote (including votes delegated to you) to proposal 'proposals[proposal].name'.
     * @param proposal index of proposal in the proposals array
     */
    function vote(uint proposal) public {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Has no right to vote");
        require(!sender.voted, "Already voted.");
        sender.voted = true;
        sender.vote = proposal;

        // If 'proposal' is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        proposals[proposal].voteCount += sender.weight;
    }

    /** 
     * @dev Computes the winning proposal taking all previous votes into account.
     * @return winningProposal_ index of winning proposal in the proposals array
     */
    function winningProposal() public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    /** 
     * @dev Calls winningProposal() function to get the index of the winner contained in the proposals array and then
     * @return winnerName_ the name of the winner
     */
    function winnerName() public view
            returns (bytes32 winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }
}
`

var tableCtr = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DBTest {
    /*
    * @param tableName eg: "test1"
    * @param raw eg: "[{\\"field\\":\\"id\\", \\"type\\" : \\"int\\", \\"length\\" : 11, \\"PK\\" : 1, \\"NN\\" : 1, \\"UQ\\" : 1}, { \\"field\\":\\"account\\", \\"type\\" : \\"varchar\\" }, { \\"field\\":\\"age\\", \\"type\\" : \\"int\\" }]"
    */
	function create(string calldata tableName, string calldata raw) public{
		msg.sender.create(tableName, raw);
	}
	/*
	* @param tableName eg: "test1"
	*/
	function drop(string calldata tableName) public{
	    msg.sender.drop(tableName);
	}
	
	/*
	* @param owner table's owner
	* @param tableName eg: "test1"
	* @param raw eg: "[{\\"account\\":\\"zU42yDW3fzFjGWosdeVjVasyPsF4YHj224\\", \\"id\\":0}, {\\"account\\":\\"zU42yDW3fzFjGWosdeVjVasyPsF4YHj224\\",   \\"id\\":1}, {\\"account\\":\\"zU42yDW3fzFjGWosdeVjVasyPsF4YHj224\\", \\"id\\":2}]"
	*/
	function insert(address owner, string calldata tableName, string calldata raw) public{
	    owner.insert(tableName, raw);
	}
	
	/*
	* @param tableName eg: "test1"
	* @param raw eg: "[{\\"account\\":\\"zU42yDW3fzFjGWosdeVjVasyPsF4YHj224\\", \\"id\\":0}, {\\"account\\":\\"zU42yDW3fzFjGWosdeVjVasyPsF4YHj224\\",   \\"id\\":1}, {\\"account\\":\\"zU42yDW3fzFjGWosdeVjVasyPsF4YHj224\\", \\"id\\":2}]"
	*/
	function insert(string calldata tableName, string calldata raw) public {
	    msg.sender.insert(tableName, raw);
	}
	
	/*
	* @param owner table's owner
	* @param tableName "test1"
	* @param raw eg: "{\\"id\\":1}"
	*/
	function deletex(address owner, string calldata tableName, string calldata raw) public {
	    owner.deletex(tableName, raw);
	}
	
	/*
	* @param tableName "test1"
	* @param raw eg: "{\\"id\\":1}"
	*/
	function deletex(string calldata tableName, string calldata raw) public {
	    msg.sender.deletex(tableName, raw);
	}
	
	/*
	* @param owner table's owner
	* @param tableName eg: "test1"
	* @param rawUpdate eg: "{\\"age\\":15}"
	* @param rawGet eg: "{\\"id\\": 2}"
	*/
	function update(address owner, string calldata tableName, string calldata rawUpdate, string calldata rawGet) public{
	    owner.update(tableName, rawUpdate, rawGet);
	}
	
	/*
	* @param tableName eg: "test1"
	* @param rawUpdate eg: "{\\"age\\":15}"
	* @param rawGet eg: "{\\"id\\": 2}"
	*/
	function update(string calldata tableName, string calldata rawUpdate, string calldata rawGet) public{
	    msg.sender.update(tableName, rawUpdate, rawGet);
	}
	
	/*
	* @param tableName eg: "test1"
	* @param tableNameNew eg: "testNew1"
	*/
	function rename(string calldata tableName, string calldata tableNameNew) public{
	    msg.sender.rename(tableName, tableNameNew);
	}
	
	/*
	* @param toWho ethereum address to be granted. need convert chainsql addr 2 ethereum addr .eg:  "0xzzzzzzzzzzzzzzzzzzzzBZbvji"
	* @param tableName eg: "test1"
	* @param raw eg: "{\\"insert\\":false, \\"delete\\":false}"
	*/
	function grant(address toWho, string calldata tableName, string calldata raw) public{
	    return msg.sender.grant(toWho, tableName, raw);
	}
	
	function sqlTransaction(string calldata tableName) public{
	    db.beginTrans();
	    msg.sender.create(tableName, "[{\\"field\\":\\"id\\", \\"type\\" : \\"int\\", \\"length\\" : 11, \\"PK\\" : 1, \\"NN\\" : 1, \\"UQ\\" : 1}, { \\"field\\":\\"account\\", \\"type\\" : \\"varchar\\" }, { \\"field\\":\\"age\\", \\"type\\" : \\"int\\" }]");
        msg.sender.insert(tableName, "[{\\"account\\":\\"zU42yDW3fzFjGWosdeVjVasyPsF4YHj224\\", \\"id\\":1}, {\\"account\\":\\"zU42yDW3fzFjGWosdeVjVasyPsF4YHj224\\",   \\"id\\":2}]");
        msg.sender.deletex(tableName, "{\\"id\\":1}");
        msg.sender.update(tableName, "{\\"account\\":\\"id==2\\"}", "{\\"id\\": 2}");
        db.commit();
	}

    /*
	* @param owner table's owner
	* @param tableName eg: "test1"
	* @param raw eg: ""
    */
    function get(address owner, string calldata tableName, string calldata raw) public view 
    returns(string memory) {
        uint256 handle = owner.get(tableName, raw);
		require(handle != uint256(0), "Get table data failed,maybe user not authorized!");
        uint row = db.getRowSize(handle);
        uint col = db.getColSize(handle);
        string memory xxx;
        for(uint i=0; i<row; i++)
        {
            for(uint j=0; j<col; j++)
            {
                string memory y = (db.getValueByIndex(handle, i, j));
                xxx = concat(xxx, y);
				if(j != col - 1)
                	xxx = concat(xxx, ", ");
            }
            xxx = concat(xxx, ";\\n");
        }
        return xxx;
    }
        /*
	* @param owner table's owner
	* @param tableName eg: "test1"
	* @param raw eg: ""
	* @param field eg: "id"
    */
    function get(address owner, string calldata tableName, string calldata raw, string calldata field) 
    public view returns(string memory) {
        uint256 handle = owner.get(tableName, raw);
		require(handle != uint256(0), "Get table data failed,maybe user not authorized!");
        uint row = db.getRowSize(handle);
        string memory xxx;
        for(uint i=0; i<row; i++)
        {
            string memory y = (db.getValueByKey(handle, i, field));
            xxx = concat(xxx, y);
            xxx = concat(xxx, ";");
        }
        return xxx;
    }
    
    function concat(string memory _base, string memory _value) internal pure 
    returns (string memory) {
        bytes memory _baseBytes = bytes(_base);
        bytes memory _valueBytes = bytes(_value);

        string memory _tmpValue = new string(_baseBytes.length + _valueBytes.length);
        bytes memory _newValue = bytes(_tmpValue);
        
        uint j = 0;
        for(uint i=0; i<_baseBytes.length; i++) {
            _newValue[j++] = _baseBytes[i];
        }

        for(uint i=0; i<_valueBytes.length; i++) {
            _newValue[j++] = _valueBytes[i];
        }

        return string(_newValue);
    }
}`

var gatewayCtr = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GatewayTxsTest { 

    constructor () {
    }
	
	fallback() external payable {  }
    receive() external payable {  }
		
    /*
    *  设置网关相关属性
    * @param uFlag   一般情况下为8，表示asfDefaultRipple，详见https://developers.ripple.com/accountset.html#accountset-flags
    * @param bSet    true，开启uFlag；false 取消uFlag。
    */
    function accountSet(uint32 uFlag,bool bSet) public {
        msg.sender.accountSet(uFlag,bSet);
    }	
	
    /*
    *  设置网关交易费用
    * @param sRate    交易费率。范围为"1.0”- "2.0" 或者"0.0"
    * @param minFee   网关交易最小花费  字符串转成10进制数后， >=0
    * @param maxFee   网关交易最大花费	字符串转成10进制数后,  >=0
	* @ 备注 ,以下规则均在字符串转化为10进制数后进行运算
	
		 1 sRate 为0或者1时，表示取消费率，但是此时的minFee必须等于maxFee。
		 2 minFee 或者 maxFee为0 时，表示取消相应的最小，最大费用。
		 3 minFee等于maxFee时， sRate 必为0或者1。
		 4 除了minFee 或者 maxFee为0 时的情况时，minFee < maxFee。
		   
    */
    function setTransferFee(string calldata sRate,string calldata minFee,string calldata maxFee) public {
        msg.sender.setTransferFee(sRate,minFee,maxFee);
    }

    /*
    *   设置信任网关代币以及代币的额度
    * @param value           代币额度
    * @param sCurrency       代币名称
    * @param gateWay         信任网关地址
    */
    function trustSet(string calldata value,string calldata sCurrency,address gateWay) public {
        msg.sender.trustSet(value,sCurrency,gateWay);
    }

    /*
    *   设置信任网关代币以及代币的额度
    * @param contractAddr    合约地址
    * @param value           代币额度
    * @param sCurrency       代币名称
    * @param gateWay         信任网关地址
    */
    function trustSet(address contractAddr,string calldata value,string calldata sCurrency, address gateWay) public {
        contractAddr.trustSet(value,sCurrency,gateWay);
    }
	
    /*
    *   查询网关的信任代币额度
    * @param  sCurrency          代币名称
	* @param  power              查询参数.代币额度为100时，如果该参数为2，函数返回值为10000 = 100*10^2；代币额度为100.5时,如果该参数为1,函数返回值为1005 = 100.5*10^1  				
    * @param  gateWay            网关地址
    * @return -1:不存在网关代币信任关系; >=0 信任网关代币额度
    */
    function trustLimit(string calldata sCurrency,uint64 power,address gateWay)
    public view returns(int256) {
        int256  ret =  (int256)(msg.sender.trustLimit(sCurrency,power,gateWay));
		return ret;
    }

    /*
    *   查询网关的信任代币额度
    * @param  contractAddr       合约地址
    * @param  sCurrency          代币名称
	* @param  power              查询参数.代币额度为100时，如果该参数为2，函数返回值为10000 = 100*10^2；代币额度为100.5时,如果该参数为1,函数返回值为1005 = 100.5*10^1  			
    * @param  gateWay            网关地址
    * @return -1:不存在网关代币信任关系; >=0 信任网关代币额度
    */
    function trustLimit(address contractAddr,string calldata sCurrency,uint64 power,address gateWay)
    public view returns(int256) {
        // 合约地址也可查询网关信任代币信息
        int256  ret =  (int256)(contractAddr.trustLimit(sCurrency,power,gateWay));
		return ret;
    }	
	
    /*
    *   获取网关代币的余额
    * @param  sCurrency       代币名称
	* @param  power           查询参数.代币余额为100时，如果该参数为2，函数返回值为10000 = 100*10^2；代币余额为100.5时,如果该参数为1,函数返回值为1005 = 100.5*10^1  		
    * @param  gateWay         网关地址
    * @return -1:不存在该网关代币; >=0 网关代币的余额
    */
    function gatewayBalance(string calldata sCurrency,uint64 power,address gateWay)   public view returns(int256) {
        int256  ret = (int256)(msg.sender.gatewayBalance(sCurrency,power,gateWay));
		return ret;
    }

    /*
    *   获取网关代币的余额
    * @param  contractAddr    合约地址
    * @param  sCurrency       代币名称
	* @param  power           查询参数.代币余额为100时，如果该参数为2，函数返回值为10000 = 100*10^2；代币余额为100.5时,如果该参数为1,函数返回值为1005 = 100.5*10^1  	
    * @param  gateWay         网关地址
    * @return -1:不存在该网关代币; >=0 网关代币的余额
    */
    function gatewayBalance(address contractAddr,string calldata sCurrency,uint64 power,address gateWay) public view returns(int256)  {
        // 合约地址也可获取网关代币的余额
        int256  ret = (int256)(contractAddr.gatewayBalance(sCurrency,power,gateWay));
		return ret;
    }	
	
  /*
  *   转账代币
  * @param accountTo         转入账户
  * @param value             代币数量
  * @param sendMax           消耗代币的最大值，具体计算规则见http://docs.chainsql.net/interface/javaAPI.html#id84
  * @param sCurrency         代币名称
  * @param sGateway          网关地址
  */
    function pay(address accountTo,string calldata value,string calldata sendMax,
                        string calldata sCurrency,address gateWay) public{
        msg.sender.pay(accountTo,value,sendMax,sCurrency,gateWay);
    }

    /*
    *   转账代币
    * @param contractAddr      合约地址
    * @param accountTo         转入账户
    * @param value             代币数量
    * @param sendMax           消耗代币的最大值，具体计算规则见http://docs.chainsql.net/interface/javaAPI.html#id84	
    * @param sCurrency         代币名称
    * @param gateWay           网关地址
    */
    function gatewayPay(address contractAddr,address accountTo,string calldata value,string calldata sendMax,
                        string calldata sCurrency,address gateWay) public{
	   contractAddr.pay(accountTo,value,sendMax,sCurrency,gateWay);
    }		
}`

module.exports = {
    storageCtr: { name: '1_Storage.sol', content: storageCtr },
    ownerCtr: { name: '2_Owner.sol', content: ownerCtr },
    ballotCtr: { name: '3_Ballot.sol', content: ballotCtr },
    tableCtr: { name: '4_Table.sol', content: tableCtr },
    gatewayCtr: { name: '5_GateWay.sol', content: gatewayCtr}
}
