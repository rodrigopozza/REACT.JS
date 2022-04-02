import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";


import { api } from "../../../config";

export const Item = (props) => {
     console.log(props.match.params.id);

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: "",
        message:""
    });

    const getItens = async () => {
        await axios.get(api+"/servicos/"+id+"/pedidos")
            .then((response) => {
                console.log(response.data.item);
                setData(response.data.item);
            }).catch(() => {
                setStatus({
                    type: "error",
                    message: "Erro: Sem conexão com a API."
                });
            });
    }
    useEffect(() => {
        getItens();
    },[id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <h1>Visualizar informações do Pedidos do Serviço</h1>
                </div>
                    <div className="p-2"> 
                        {status.type === 'error' ?  <Alert color="danger">{status.message} </Alert> :""}
                     </div>   
                <Table striped>
                    <thead>
                        <tr>
                            <th>Pedido</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ServicoId}>
                                <td>
                                    {item.PedidoId}
                                </td>
                                <td>
                                    {item.quantidade}
                                </td>
                                <td>
                                    {item.valor}
                                </td>
                                <td className="text-center/">
                                 <Link to = {"/listar-pedido/"}
                                 className =" btn btn-outline-primary btn-sm">Consultar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};