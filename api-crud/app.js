import http from 'http';
import fs from 'fs';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./tic.db', (erro)=>{
    if (erro) {
        console.log('Falha ao inicializar o banco de dados');
        return;
    }
    console.log('Banco de Dados inicializado');
});

fs.writeFile('./mensagem.txt', 'Olá! 🚀','utf-8', (error)=> {
    if (error) {
        console.error('Falha ao escrever o Arquivo!', error);
        return;
    }
    console.log('Arquivo criado com Sucesso!');
});

fs.readFile('./mensagem.txt','utf-8', (error, conteudo) => {
    if(error) {
        console.error('Houve uma falha na leitura do Arquivo.', error);
        return;
    }

    console.log(`Conteúdo: ${conteudo}`);
    
    iniciaServidorHttp(conteudo);
}); 

function iniciaServidorHttp(conteudo){

    const servidor = http.createServer((req,res) => {
       rotas(req, res, {conteudo});
    });

    const porta = 3000;
    const host = 'localhost';

    servidor.listen(porta, host, ()=> {
        console.log(`Servidor executanto em http://${host}:${porta}/`);
    })
}

