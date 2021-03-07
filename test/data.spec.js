import {pokedex} from '../src/data.js';

//para filter bycondition 1
describe('filter By Type test', () => {
  it('is a function', () => {
    expect(typeof pokedex.filterByType).toBe('function');
  });

  it('return result to filter By Type', () => {
    const data = [{
      name: 'pokemon1',
      type: 'fire',
    },
    {
      name: 'pokemon2',
      type: 'grass',
    }
    ]
    const type = 'fire';
    const result = [{
      name: 'pokemon1',
      type: 'fire',
    }]

    


    expect(pokedex.filterByType(data, type)).toEqual(result);

  });
});
//Para filter by type condition 2


//para order de la A - Z
describe('orderByName test', () => {
  it('is a function', () => {
    expect(typeof pokedex.orderByName).toBe('function');
  });

  it('orderByName A to Z', () => {
    const data = [{
      name: 'A',
    },
    {
      name: 'Z'
    }]

    const nameA = 'A-Z';
    const result = [{
      name: 'A',
    },
    {
      name: 'Z',
    }]
    expect(pokedex.orderByName(data, nameA)).toEqual(result);
  });
});

// para buscar por nombre
describe('filterByName test', () => {
  it('is a function', () => {
    expect(typeof pokedex.filterByName).toBe('function');
  });

  it('return result to filterByName', () => {
    const data = [{
      name: 'pokemon1'
    },
    {
      name: 'pokemon2'
    }]
    const name = 'pokemon1';
    const result = [{
      name: 'pokemon1'
    }]
    expect(pokedex.filterByName(data, name)).toEqual(result);
  });
  
});

//Para calcular
describe('calculateStats test', () => {
  it('is a function', () => {
    expect(typeof pokedex.calculateStats).toBe('function');
  });

  it('return result to calculateStats ', () => {
    const data = {
      name: 'pokemon1',
      stats: {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      }
    }
    const result = 317
    expect(pokedex.calculateStats(data)).toEqual(result);
  });
  
});  