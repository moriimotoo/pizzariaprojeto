import prismaClient from "../../prisma";

interface DetailsOrderRequest{
    id_pedido: string;
}

class DetailsOrderService{
    async execute ({id_pedido}: DetailsOrderRequest){
        const order = prismaClient.pedido.findFirst({
            where:{
                id: id_pedido
            }
        });

        return {...(await order), items: (await order.items())};
    }
}

export{DetailsOrderService}