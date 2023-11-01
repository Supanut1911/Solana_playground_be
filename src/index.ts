import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const transcation = new Transaction();
const sender = new PublicKey("64kuqVZv4XydanmmvKrcCyttq8oPtmbMbK79EKmW6ynS");
const recipient = new PublicKey("AKs8KdXQ8Jwv1qgnXq22VRfWCazN7iDBC8waHD3bQf6v");

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: sender,
  toPubkey: recipient,
  lamports: LAMPORTS_PER_SOL * 0.1,
});

const tx = transcation.add(sendSolInstruction);
console.log("tx =>", tx);
