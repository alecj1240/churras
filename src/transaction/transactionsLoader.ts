import { Formatter, TransactionResponse } from "@ethersproject/providers";
import { EtherscanApiClient } from "../etherscanApiClient";

export default class TransactionsLoader {
  private etherscanApiClient: EtherscanApiClient;

  constructor(etherscanApiClient: EtherscanApiClient) {
    this.etherscanApiClient = etherscanApiClient;
  }

  /** Loads all transactions for the provided `address` */
  async loadTransactions(address: string): Promise<TransactionResponse[]> {
    const response = await this.etherscanApiClient.loadTransactions(address);
    const formatter = new Formatter();
    return response.map((tx: any) => formatter.transactionResponse(tx));
  }
}
