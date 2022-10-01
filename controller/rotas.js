const express = require('express');
const { Model } = require('sequelize');
const router = express.Router();

const categoria =require('../model/categoria');

router.get('/get',(req,res)=>{
res.send('<H1> Ola </H1>');
});
// select * from categoria
router.get('/listarCategoria', (req, res)=>{
    categoria.findAll()
            .then(
                (categorias)=>{
                    return res.status(200).json(categorias);
                }
            ).catch((erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMensagem: erro
                });
            });
    }
);
// select where id 
router.get('/selecionarcategoria/:codCategoria', (req, res)=>{
    let {codCategoria} = req.params;
    categoria.findByPk(codCategoria)
        .then(
                (categoria)=>{
                res.status(200).json(categoria);
                }
        ).catch(
                (erro)=>{
                         return res.status(400).json({
                         erroStatus: true,
                         erroMensagem: 'Dados não encontrados',
                        erroBancoDeDados: erro
                         });
        }
    );
});
// insert
router.post('/inserirCategoria',(req,res)=>{
    let {nomeCategoria} = req.body;
    categoria.create(
        {nomeCategoria}
         ).then(
            ()=>{
                    return res.status(200).json({
                    erroStatus: false,
                    mensagemStatus: 'Categoria Inserida com sucesso!'  
                 });
                }   
    ).catch(
            (erro)=>{
                     return res.status(400).json({
                     erroStatus: true,
                     mensagemStatus: 'Erro ao gravar dados!',
                     erroBancoDeDados: erro   
                    });
            }        
    );
});
// update
router.put('/atualizarCategoria', (req,res)=>{
let{codCategoria, nomeCategoria} = req.body;
    categoria.update(
         {nomeCategoria},
         {where:{codCategoria}}
     ).then(
             ()=>{
                    return res.status(200).json({
                    erroStatus: false,
                    menssagemStatus: 'Categoria alterada com sucesso!'
                    });   
            }
     ).catch(
             (erro)=>{
                    return res.status(400).json({
                    erroStatus: true,
                    menssagemStatus: 'Erro ao alterar dados!'
             });   
        }     
     );
});
// delete
router.delete('/excluirCategoria/:codCategoria', (req,res)=>{
let{codCategoria} = req.params;
    categoria.destroy(
         {where:{codCategoria}}
     ).then(
             ()=>{
                    return res.status(200).json({
                    erroStatus: false,
                    menssagemStatus: 'Categoria excluida com sucesso!'
                    });   
            }
     ).catch(
             (erro)=>{
                    return res.status(400).json({
                    erroStatus: true,
                    menssagemStatus: 'Erro ao exxcluir dados!'
             });   
        }     
     );
});  
module.exports = router;