let bitcoin = []
let id = 0

module.exports = {
    read:(req,res)=>{
        // console.log('hit read')
        res.status(200).send(bitcoin)
    },
    create:(req,res)=>{
        // console.log(rrrseq)
        const {name} = req.body
        

        bitcoin.push({name,id})
        id++
        res.status(200).send(bitcoin)
    },
    update:(request,responce)=>{
        let {id} = request.params
        let {text}=request.body
        console.log(text)
        let index = bitcoin.findIndex(bitcoin=>bitcoin.id == id)
        bitcoin[index]=
        {
            id:id,
            name:text || bitcoin[index].name
        }
        responce.status(200).send(bitcoin)

    },
    delete: (req,responce)=>{
        let index = null

        bitcoin.forEach((coin, i) => {
        if(coin.id === Number(req.params.id)) 
        index = i;
          })

        bitcoin.splice(index,1)
        responce.status(200).send(bitcoin)
    }

}
