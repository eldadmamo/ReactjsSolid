// C:\Users\eldad\PhpstormProjects\blockchain\reactsolidity>truffle console
// truffle(development)> const instance = await Faucet.deployed()
// undefined
// truffle(development)> instance
// TruffleContract {
//   constructor: [Function: TruffleContract] {
//     _constructorMethods: {
//       configureNetwork: [Function: configureNetwork],
//       setProvider: [Function: setProvider],
//       new: [Function: new],
//       at: [AsyncFunction: at],
//       deployed: [AsyncFunction: deployed],
//       defaults: [Function: defaults],
//       hasNetwork: [Function: hasNetwork],
//       isDeployed: [Function: isDeployed],
//       detectNetwork: [AsyncFunction: detectNetwork],
//       setNetwork: [Function: setNetwork],
//       setNetworkType: [Function: setNetworkType],
//       setWallet: [Function: setWallet],
//       resetAddress: [Function: resetAddress],
//       link: [Function: link],
//       clone: [Function: clone],
//       addProp: [Function: addProp],
//       toJSON: [Function: toJSON],
//       decodeLogs: [Function: decodeLogs]
//     },
//     _properties: {
//       contract_name: [Object],
//       contractName: [Object],
//       gasMultiplier: [Object],
//       timeoutBlocks: [Object],
//       autoGas: [Object],
//       numberFormat: [Object],
//       abi: [Object],
//       metadata: [Function: metadata],
//       network: [Function: network],
//       networks: [Function: networks],
//       address: [Object],
//       transactionHash: [Object],
//       links: [Function: links],
//       events: [Function: events],
//       binary: [Function: binary],
//       deployedBinary: [Function: deployedBinary],
//       unlinked_binary: [Object],
//       bytecode: [Object],
//       deployedBytecode: [Object],
//       sourceMap: [Object],
//       deployedSourceMap: [Object],
//       source: [Object],
//       sourcePath: [Object],
//       legacyAST: [Object],
//       ast: [Object],
//       compiler: [Object],
//       schema_version: [Function: schema_version],
//       schemaVersion: [Function: schemaVersion],
//       updated_at: [Function: updated_at],
//       updatedAt: [Function: updatedAt],
//       userdoc: [Function: userdoc],
//       devdoc: [Function: devdoc],
//       networkType: [Object],
//       immutableReferences: [Object],
//       generatedSources: [Object],
//       deployedGeneratedSources: [Object],
//       db: [Object]
//     },
//     _property_values: {},
//     _json: {
//       contractName: 'Faucet',
//       abi: [Array],
//       metadata: '{"compiler":{"version":"0.5.1+commit.c8a2cb62"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[],"name":"counter","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"funds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"test","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"project:/contracts/FaucetContract.sol":"Faucet"},"evmVersion":"byzantium","libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/FaucetContract.sol":{"keccak256":"0x28cd71638cbaf429100739ef6e086d6cbdd47c7b3e9fb62c350aa93b7a835b19","urls":["bzzr://b89c890fa242cc3507d65803a4173d1c3462e376c4e4d32c1ac6d58ab2a6a28a"]}},"version":1}',
//       bytecode: '0x60806040526103e86000557ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff660015563ffffffff600260006101000a81548163ffffffff021916908363ffffffff16021790555034801561005f57600080fd5b506101248061006f6000396000f3fe608060405260043610604d576000357c01000000000000000000000000000000000000000000000000000000009004806361bc221a146052578063c89f2ce414607a578063f8a8fd6d1460a2575b600080fd5b348015605d57600080fd5b50606460d6565b6040518082815260200191505060405180910390f35b348015608557600080fd5b50608c60dc565b6040518082815260200191505060405180910390f35b34801560ad57600080fd5b5060b460e2565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b60015481565b60005481565b600260009054906101000a900463ffffffff168156fea165627a7a723058201e90cb6fd43a1d6732f20cb32fa34013a0930392477760ded150a0b6471c68f10029',
//       deployedBytecode: '0x608060405260043610604d576000357c01000000000000000000000000000000000000000000000000000000009004806361bc221a146052578063c89f2ce414607a578063f8a8fd6d1460a2575b600080fd5b348015605d57600080fd5b50606460d6565b6040518082815260200191505060405180910390f35b348015608557600080fd5b50608c60dc565b6040518082815260200191505060405180910390f35b34801560ad57600080fd5b5060b460e2565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b60015481565b60005481565b600260009054906101000a900463ffffffff168156fea165627a7a723058201e90cb6fd43a1d6732f20cb32fa34013a0930392477760ded150a0b6471c68f10029',
//       immutableReferences: undefined,
//       generatedSources: undefined,
//       deployedGeneratedSources: undefined,
//       sourceMap: '69:120:0:-;;;112:4;92:24;;144:3;123:24;;175:10;154:31;;;;;;;;;;;;;;;;;;;;69:120;8:9:-1;5:2;;;30:1;27;20:12;5:2;69:120:0;;;;;;;',
//       deployedSourceMap: '69:120:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;123:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;123:24:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;92;;8:9:-1;5:2;;;30:1;27;20:12;5:2;92:24:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;154:31;;8:9:-1;5:2;;;30:1;27;20:12;5:2;154:31:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;123:24;;;;:::o;92:::-;;;;:::o;154:31::-;;;;;;;;;;;;;:::o',
//       source: '// SPDX-License-Identifier: MIT\r\n' +
//         'pragma solidity >=0.4.22 <0.9.0;\r\n' +
//         '\r\n' +
//         'contract Faucet {\r\n' +
//         '    uint public funds = 1000;\r\n' +
//         '    int public counter = -10;\r\n' +
//         '    uint32 public test = 4294967295;\r\n' +
//         '}\r\n' +
//         '\r\n',
//       sourcePath: 'C:\\Users\\eldad\\PhpstormProjects\\blockchain\\reactsolidity\\contracts\\FaucetContract.sol',
//       ast: [Object],
//       legacyAST: [Object],
//       compiler: [Object],
//       networks: [Object],
//       schemaVersion: '3.4.16',
//       updatedAt: '2025-02-03T15:28:11.541Z',
//       networkType: 'ethereum',
//       devdoc: [Object],
//       userdoc: [Object],
//       db: undefined
//     },
//     configureNetwork: [Function: bound configureNetwork],
//     setProvider: [Function: bound setProvider],
//     new: [Function: bound new] {
//       estimateGas: [Function: bound estimateDeployment],
//       request: [Function: bound requestDeployment]
//     },
//     at: [Function: bound at] AsyncFunction,
//     deployed: [Function: bound deployed] AsyncFunction,
//     defaults: [Function: bound defaults],
//     hasNetwork: [Function: bound hasNetwork],
//     isDeployed: [Function: bound isDeployed],
//     detectNetwork: [Function: bound detectNetwork] AsyncFunction,
//     setNetwork: [Function: bound setNetwork],
//     setNetworkType: [Function: bound setNetworkType],
//     setWallet: [Function: bound setWallet],
//     resetAddress: [Function: bound resetAddress],
//     link: [Function: bound link],
//     clone: [Function: bound clone],
//     addProp: [Function: bound addProp],
//     toJSON: [Function: bound toJSON],
//     decodeLogs: [Function: bound decodeLogs],
//     enums: {},
//     class_defaults: { from: '0xd591aACE1Edcd252966C40354606d48B032f0831' },
//     interfaceAdapter: Web3InterfaceAdapter { web3: [Web3Shim] },
//     web3: Web3Shim {
//       currentProvider: [Getter/Setter],
//       _requestManager: [RequestManager],
//       givenProvider: null,
//       providers: [Object],
//       _provider: [HttpProvider],
//       setProvider: [Function (anonymous)],
//       setRequestManager: [Function (anonymous)],
//       BatchRequest: [Function: bound Batch],
//       extend: [Function],
//       version: '1.10.0',
//       utils: [Object],
//       eth: [Eth],
//       shh: [Shh],
//       bzz: [Bzz],
//       networkType: 'ethereum'
//     },
//     currentProvider: HttpProvider {
//       withCredentials: undefined,
//       timeout: 0,
//       headers: undefined,
//       agent: undefined,
//       connected: false,
//       host: 'http://127.0.0.1:7545',
//       httpAgent: [Agent],
//       send: [Function (anonymous)],
//       request: [Function: bound modifiedRequest] AsyncFunction,
//       _alreadyWrapped: true
//     },
//     network_id: '5777',
//     disableConfirmationListener: undefined,
//     ens: { enabled: false, registryAddress: undefined }
//   },
//   methods: {
//     'counter()': [Function (anonymous)] {
//       call: [Function (anonymous)],
//       sendTransaction: [Function (anonymous)],
//       estimateGas: [Function (anonymous)],
//       request: [Function (anonymous)]
//     },
//     'funds()': [Function (anonymous)] {
//       call: [Function (anonymous)],
//       sendTransaction: [Function (anonymous)],
//       estimateGas: [Function (anonymous)],
//       request: [Function (anonymous)]
//     },
//     'test()': [Function (anonymous)] {
//       call: [Function (anonymous)],
//       sendTransaction: [Function (anonymous)],
//       estimateGas: [Function (anonymous)],
//       request: [Function (anonymous)]
//     }
//   },
//   abi: [
//     {
//       constant: true,
//       inputs: [],
//       name: 'counter',
//       outputs: [Array],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0x61bc221a'
//     },
//     {
//       constant: true,
//       inputs: [],
//       name: 'funds',
//       outputs: [Array],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0xc89f2ce4'
//     },
//     {
//       constant: true,
//       inputs: [],
//       name: 'test',
//       outputs: [Array],
//       payable: false,
//       stateMutability: 'view',
//       type: 'function',
//       signature: '0xf8a8fd6d'
//     }
//   ],
//   address: '0x6B6dB0fCedE27639E144Bf93A182CcE0bC95b6D8',
//   transactionHash: undefined,
//   contract: Contract {
//     setProvider: [Function (anonymous)],
//     currentProvider: [Getter/Setter],
//     _requestManager: RequestManager {
//       provider: [HttpProvider],
//       providers: [Object],
//       subscriptions: Map(0) {}
//     },
//     givenProvider: null,
//     providers: {
//       WebsocketProvider: [Function: WebsocketProvider],
//       HttpProvider: [Function: HttpProvider],
//       IpcProvider: [Function: IpcProvider]
//     },
//     _provider: HttpProvider {
//       withCredentials: undefined,
//       timeout: 0,
//       headers: undefined,
//       agent: undefined,
//       connected: false,
//       host: 'http://127.0.0.1:7545',
//       httpAgent: [Agent],
//       send: [Function (anonymous)],
//       request: [Function: bound modifiedRequest] AsyncFunction,
//       _alreadyWrapped: true
//     },
//     setRequestManager: [Function (anonymous)],
//     BatchRequest: [Function: bound Batch],
//     extend: [Function: ex] {
//       formatters: [Object],
//       utils: [Object],
//       Method: [Function: Method]
//     },
//     clearSubscriptions: [Function (anonymous)],
//     options: { address: [Getter/Setter], jsonInterface: [Getter/Setter] },
//     handleRevert: [Getter/Setter],
//     defaultCommon: [Getter/Setter],
//     defaultHardfork: [Getter/Setter],
//     defaultChain: [Getter/Setter],
//     transactionPollingTimeout: [Getter/Setter],
//     transactionPollingInterval: [Getter/Setter],
//     transactionConfirmationBlocks: [Getter/Setter],
//     transactionBlockTimeout: [Getter/Setter],
//     blockHeaderTimeout: [Getter/Setter],
//     defaultAccount: [Getter/Setter],
//     defaultBlock: [Getter/Setter],
//     methods: {
//       counter: [Function: bound _createTxObject],
//       '0x61bc221a': [Function: bound _createTxObject],
//       'counter()': [Function: bound _createTxObject],
//       funds: [Function: bound _createTxObject],
//       '0xc89f2ce4': [Function: bound _createTxObject],
//       'funds()': [Function: bound _createTxObject],
//       test: [Function: bound _createTxObject],
//       '0xf8a8fd6d': [Function: bound _createTxObject],
//       'test()': [Function: bound _createTxObject]
//     },
//     events: { allEvents: [Function: bound ] },
//     _address: '0x6B6dB0fCedE27639E144Bf93A182CcE0bC95b6D8',
//     _jsonInterface: [ [Object], [Object], [Object] ]
//   },
//   counter: [Function (anonymous)] {
//     call: [Function (anonymous)],
//     sendTransaction: [Function (anonymous)],
//     estimateGas: [Function (anonymous)],
//     request: [Function (anonymous)]
//   },
//   funds: [Function (anonymous)] {
//     call: [Function (anonymous)],
//     sendTransaction: [Function (anonymous)],
//     estimateGas: [Function (anonymous)],
//     request: [Function (anonymous)]
//   },
//   test: [Function (anonymous)] {
//     call: [Function (anonymous)],
//     sendTransaction: [Function (anonymous)],
//     estimateGas: [Function (anonymous)],
//     request: [Function (anonymous)]
//   },
//   sendTransaction: [Function (anonymous)],
//   estimateGas: [Function (anonymous)],
//   call: [Function (anonymous)],
//   send: [Function (anonymous)],
//   allEvents: [Function (anonymous)],
//   getPastEvents: [Function (anonymous)]
// }
// truffle(development)> const funds = await instance.funds()
// undefined
// truffle(development)> funds
// BN {
//   negative: 0,
//   words: [ 1000, <1 empty item> ],
//   length: 1,
//   red: null
// }
// truffle(development)> funds.toString()
// '1000'
// truffle(development)> const counter = await instance.counter()
// undefined
// truffle(development)> funds
// BN {
//   negative: 0,
//   words: [ 1000, <1 empty item> ],
//   length: 1,
//   red: null
// }
// truffle(development)> funds.toString()
// '1000'
// truffle(development)> const counter = await instance.counter()
// Uncaught SyntaxError: Identifier 'counter' has already been declared
// truffle(development)> counter.toString()
// '-10'
// truffle(development)> funds.toString()
// '1000'
// truffle(development)> const test = await instance.test()
// undefined
// truffle(development)> test.toString()
// '4294967295'



// truffle(development)> web3.eth.getCode("0xAF259891F25f6143195B81F016801C5bb9590B83")
// '0x608060405236600a57005b600080fdfea26469706673582212202c961bc40ca76e28bbd7104a01223675cd739a837cc1cdd91d46282a7bfd7d2964736f6c63430008040033'
// truffle(development)>