import axios from 'axios';

export async function getTransactions () {
    return await axios.get('http://localhost:2000/get-transactions');
}

export async function createTransactions (transaction) {
    return await axios.post('http://localhost:2000/create-transaction', transaction);
}