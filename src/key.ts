import { Keypair } from "@solana/web3.js";
import * as bs58 from "bs58";

const keypair = Keypair.generate();

const main = async () => {
  console.log(`public key: ${keypair.publicKey.toBase58()}`);
  console.log("sec key", keypair.secretKey);
  console.log("private key", bs58.encode(keypair.secretKey));
};

main();
