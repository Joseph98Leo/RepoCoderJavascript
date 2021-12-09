let burgers = [
    {
        id: 1,
        name: 'Hawaiana',
        hasMeat: false,
        prices: {small: 30, medium: 45, big: 60}
    },
    
    {
        id: 2,
        name: 'Carnívora',
        hasMeat: true,
        prices: {small: 40, medium: 80, big: 120}
    },
    
    {
        id: 3,
        name: 'Vegetariana',
        hasMeat: false,
        prices: {small: 25, medium: 40, big: 70}
    },

    {
        id: 4,
        name: 'Barbacoa',
        hasMeat: true,
        prices: {small: 30, medium: 50, big: 90}
    },
];

// Función que recibe un array de IDs y retorna un nuevo Array con los ID recibidos

let getByID = ( arrayIDs) => {
    return burgers.filter((burger) => {
        if(arrayIDs.indexOf(burger.id) != -1) return true
        return false
    })
}

console.log(getByID([2, 4]));
