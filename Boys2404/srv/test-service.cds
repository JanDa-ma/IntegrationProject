using { sap.capire.Onkosten as my } from '../db/testdb';
service CatalogService @(path:'/browse') {

  @readonly entity Personen as SELECT from my.Personen {*
  }
}

service CatalogCreate @(path: '/create'){
    
}