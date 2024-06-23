# Storing-Data-In-Decentralized-Cloud-Using-Blockchain

This project, Decentralized Document Storage System, leverages blockchain and distributed file system technology to create a secure and decentralized platform for storing document hashes on the Ethereum blockchain, with the actual documents stored on the InterPlanetary File System (IPFS). This combination enhances data security, maintains privacy, and ensures that the data remains tamper-proof.

# Objective
The primary objective of this project is to address the vulnerabilities associated with centralized data storage systems, such as susceptibility to hacks, data tampering, and privacy breaches. By utilizing blockchain technology, the system ensures that once a document is stored, its integrity is maintained and it cannot be altered without detection. IPFS is used to store the documents in a decentralized manner, reducing reliance on centralized servers that can be single points of failure.

# Key Features
## Blockchain Integration: 
Utilizes Ethereum blockchain to store document hashes securely. This ensures that any changes to the document would result in a different hash, signaling tampering or alteration.
## IPFS for File Storage: 
Files are stored on IPFS, which offers a peer-to-peer network for storing and sharing data in a distributed file system. This significantly enhances data retrieval efficiency and ensures data permanence.
## Smart Contracts for Automation: 
Smart contracts automate the process of hash storage and verification, ensuring that interactions are executed based on predefined rules without the need for intermediaries.
## React Frontend:
A user-friendly interface created with React allows users to interact seamlessly with the backend technologies. Users can upload documents, retrieve them, and view the hashes stored on the blockchain.
## Security and Privacy: 
By decentralizing the storage, the system significantly reduces the risks of data breaches. Furthermore, only hashes are stored on the blockchain, keeping the actual data content private.

# Technical Components

## Solidity Smart Contracts: 
Smart contracts written in Solidity manage the storage of document hashes on the Ethereum blockchain. These contracts handle the logic for storing and retrieving hashes, ensuring that only valid transactions are processed.

## IPFS: 
The InterPlanetary File System is used for storing actual documents. When a document is uploaded to IPFS, it returns a hash of the content (CID - Content Identifier) which is then stored on the blockchain. This ensures that the document content can be retrieved from any node in the IPFS network using the hash.

## React and Web3.js: 
The frontend is developed using React, providing a responsive interface for users to upload and fetch documents. Web3.js is integrated to interact with Ethereum, allowing the frontend to communicate with smart contracts for transaction processing.

## Truffle Suite: 
This is used for developing, testing, and deploying smart contracts. It includes development tools that make working with the Ethereum blockchain easier and more efficient.

## Ganache: 
A personal blockchain for Ethereum development that you can use to deploy contracts, develop applications, and run tests. It is available both as a desktop application and a command-line tool.

# Project Flow
## Document Upload: 
Users upload documents via the React interface. The document is sent to IPFS, which stores the document and returns a unique hash.
## Hash Storage:
The hash returned by IPFS is then sent to the Ethereum blockchain via a transaction executed by the smart contract. This transaction stores the hash in a mapping, associating it with a unique document ID.
## Document Retrieval:
To retrieve a document, the user inputs the document ID into the interface. The corresponding hash is fetched from the blockchain and used to retrieve the document from IPFS.

# Future Enhancements
## Enhanced Security Features: 
Implementation of encryption before uploading the documents to IPFS for additional security.
## Scalability Improvements: 
Utilizing layer 2 solutions or other blockchain scalability improvements to handle increased transaction volumes and reduce costs.
## Interoperability Features: 
Extending support to other blockchains for increased flexibility and broader adoption.
## UI/UX Enhancements: 
Further development of the user interface to include more features such as document previews, progress bars for uploads, and detailed transaction histories.

# Conclusion
This project represents a robust solution for secure and decentralized document storage, making it ideal for applications requiring high levels of data integrity and security, such as legal documents, medical records, and intellectual property management.
