import {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("AKs8KdXQ8Jwv1qgnXq22VRfWCazN7iDBC8waHD3bQf6v");
const balance = async () => await connection.getBalance(address);

const main = async () => {
  console.log(address, "balance =", await balance());
  const balanceInSol = (await balance()) / LAMPORTS_PER_SOL;
  console.log(balanceInSol);
};

main();
