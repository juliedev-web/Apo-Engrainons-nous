liste des routes :

  USER:
    GET 
      https://api.chatengine.io/users/

    POST
        https://engrainonsnous.herokuapp.com/signup
        https://engrainonsnous.herokuapp.com/signin
        https://engrainonsnous.herokuapp.com/user/profil



    PATCH
        https://engrainonsnous.herokuapp.com/update/user/:id
        https://engrainonsnous.herokuapp.com/reset/:email
        https://engrainonsnous.herokuapp.com/uservalidate/:email/:key

    DELETE
        https://api.chatengine.io/users/:id


  SEED:
    GET:
      https://engrainonsnous.herokuapp.com/paginate/seed/:pageNumber
      https://engrainonsnous.herokuapp.com/category
      https://engrainonsnous.herokuapp.com/paginate/category/:categoryId/:pageNumber
      https://engrainonsnous.herokuapp.com/seed/:seedId

    POST:
      https://engrainonsnous.herokuapp.com/create/seed
      https://engrainonsnous.herokuapp.com/user/seedlist/:userId
      https://engrainonsnous.herokuapp.com/search/:search/:pageNumber

    PATCH:
      https://engrainonsnous.herokuapp.com/update/seed/:seedId

    DELETE:
      https://engrainonsnous.herokuapp.com/delete/seed/:seedId
