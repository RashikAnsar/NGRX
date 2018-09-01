import * as fromPizzas from './pizzas.action';

describe('Pizzas Action', () => {
  describe('LoadPizzas Actions', () => {
    describe('LoadPizzas', () => {
      it('Should create an action', () => {
        const action = new fromPizzas.LoadPizzas();
        expect({...action}).toEqual({
          type: fromPizzas.LOAD_PIZZAS
        });
      })
    });

    describe('LoadPizzasFail', () => {
      it('Should create an action', () => {
        const payload = { message: 'Load Error' }
        const action = new fromPizzas.LoadPizzasFail(payload);
        expect({...action}).toEqual({
          type: fromPizzas.LOAD_PIZZAS_FAIL,
          payload
        });
      })
    });

    describe('LoadPizzasSuccess', () => {
      it('Should create an action', () => {
        const payload = [
          {
            "name": "Blazin' Inferno",
            "toppings": [
              {
                "id": 10,
                "name": "pepperoni"
              },
              {
                "id": 9,
                "name": "pepper"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 4,
                "name": "chili"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 2,
                "name": "bacon"
              }
            ],
            "id": 1
          },
          {
            "name": "Seaside Surfin'",
            "toppings": [
              {
                "id": 6,
                "name": "mushroom"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 2,
                "name": "bacon"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 1,
                "name": "anchovy"
              },
              {
                "id": 8,
                "name": "onion"
              },
              {
                "id": 11,
                "name": "sweetcorn"
              },
              {
                "id": 9,
                "name": "pepper"
              },
              {
                "id": 5,
                "name": "mozzarella"
              }
            ],
            "id": 2
          },
          {
            "name": "Plain Ol' Pepperoni",
            "toppings": [
              {
                "id": 10,
                "name": "pepperoni"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 2,
                "name": "bacon"
              },
              {
                "id": 12,
                "name": "tomato"
              }
            ],
            "id": 3
          },
          {
            "name": "Mushroom Pizza",
            "toppings": [
              {
                "id": 8,
                "name": "onion"
              },
              {
                "id": 9,
                "name": "pepper"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 11,
                "name": "sweetcorn"
              },
              {
                "id": 6,
                "name": "mushroom"
              }
            ],
            "id": 4
          },
          {
            "name": "Veg Pizza",
            "toppings": [
              {
                "id": 12,
                "name": "tomato"
              },
              {
                "id": 6,
                "name": "mushroom"
              },
              {
                "id": 9,
                "name": "pepper"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 4,
                "name": "chili"
              },
              {
                "id": 8,
                "name": "onion"
              },
              {
                "id": 11,
                "name": "sweetcorn"
              }
            ],
            "id": 5
          },
          {
            "name": "All Toppings Pizza",
            "toppings": [
              {
                "id": 10,
                "name": "pepperoni"
              },
              {
                "id": 12,
                "name": "tomato"
              },
              {
                "id": 9,
                "name": "pepper"
              },
              {
                "id": 5,
                "name": "mozzarella"
              },
              {
                "id": 6,
                "name": "mushroom"
              },
              {
                "id": 2,
                "name": "bacon"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 4,
                "name": "chili"
              },
              {
                "id": 8,
                "name": "onion"
              },
              {
                "id": 1,
                "name": "anchovy"
              },
              {
                "id": 11,
                "name": "sweetcorn"
              }
            ],
            "id": 6
          }
        ];
        const action = new fromPizzas.LoadPizzasSuccess(payload);
        expect({...action}).toEqual({
          type: fromPizzas.LOAD_PIZZAS_SUCCESS,
          payload
        });
      })
    });
  });
});
