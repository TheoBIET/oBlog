const mainController = {
    home: (_, res) => {
        res.send({
            message: 'Welcome to the oBlog API!',
            version: '1.0.0',
            author: {
                name: 'Théo BIET',
                email: 'dev.theobiet@gmail.com'
            }
        });
    },

    notFound: (_, res) => {
        res.status(404).send({error: 'Ressource not Found'});
    }
}

module.exports = mainController;