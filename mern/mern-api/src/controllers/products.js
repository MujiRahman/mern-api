exports.createProduct = (req, res, next) => {
    const nama = req.body.name;
    const price = req.body.price;
    res.json(
        {
            massage: 'create product success',
            data: {
                id: 1,
                nama: nama,
                price: price
            }
        }
    );
    next();
}

exports.getAllProduct =  (req, res, next) => {
    res.json(
        {
            massage: 'get all product success',
            data: {
                id: 1,
                nama: 'sari gandum',
                price: 80000
            }
        }
    );
    next();
}