using { sap.capire.Onkosten as my } from '../db/testdb';
service CatalogService @(path:'/browse') {

  @readonly entity Logins as SELECT from my.Logins {*
  };

  @readonly entity Bankgegevens as SELECT from my.Bankgegevens {*
  };

  @readonly entity Bedrijven as SELECT from my.Bedrijven {*
  };

  @readonly entity Onkosten as SELECT from my.Onkosten {*
  };

  @readonly entity OnkostenType as SELECT from my.OnkostenType {*
  };
}

service CatalogCreate @(path: '/create'){
    
}