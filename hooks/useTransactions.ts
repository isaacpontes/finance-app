import { TransactionsContext } from "@/contexts/TransactionsContext"
import { useContext } from "react"

export const useTransactions = () => {
  const transactionsContext = useContext(TransactionsContext)
  if (!transactionsContext) throw new Error('Invalid access to TransactionsContext')
  return transactionsContext
}