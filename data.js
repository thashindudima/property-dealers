const DEFAULT_VEHICLES = [

    {
        id: "aqua2015",
        title: "Toyota Aqua 2015",
        price: 4950000,
        year: 2015,
        mileage: 86000,
        fuel: "Hybrid",
        transmission: "Automatic",
        engine: "1496cc",
        body: "Hatchback",
        location: "Colombo",
        condition: "Used",
        seller: "PROPERTY DEALERS",
        status: "active",
        ownerUid: "",
        image: "",
        icon: "🚗"
    },

    {
        id: "vezel2016",
        title: "Honda Vezel 2016",
        price: 5100000,
        year: 2016,
        mileage: 72000,
        fuel: "Hybrid",
        transmission: "Automatic",
        engine: "1498cc",
        body: "SUV",
        location: "Gampaha",
        condition: "Used",
        seller: "PROPERTY DEALERS",
        status: "active",
        ownerUid: "",
        image: "",
        icon: "🚙"
    },

    {
        id: "axio2014",
        title: "Toyota Axio 2014",
        price: 4650000,
        year: 2014,
        mileage: 98000,
        fuel: "Petrol",
        transmission: "Automatic",
        engine: "1496cc",
        body: "Sedan",
        location: "Kandy",
        condition: "Used",
        seller: "PROPERTY DEALERS",
        status: "active",
        ownerUid: "",
        image: "",
        icon: "🚘"
    },

    {
        id: "vitz2017",
        title: "Toyota Vitz 2017",
        price: 4990000,
        year: 2017,
        mileage: 62000,
        fuel: "Petrol",
        transmission: "Automatic",
        engine: "996cc",
        body: "Hatchback",
        location: "Colombo",
        condition: "Used",
        seller: "PROPERTY DEALERS",
        status: "active",
        ownerUid: "",
        image: "",
        icon: "🚗"
    },

    {
        id: "prius2015",
        title: "Toyota Prius 2015",
        price: 5200000,
        year: 2015,
        mileage: 115000,
        fuel: "Hybrid",
        transmission: "Automatic",
        engine: "1798cc",
        body: "Hatchback",
        location: "Galle",
        condition: "Used",
        seller: "PROPERTY DEALERS",
        status: "active",
        ownerUid: "",
        image: "",
        icon: "🚘"
    },

    {
        id: "allion2014",
        title: "Toyota Allion 2014",
        price: 5450000,
        year: 2014,
        mileage: 132000,
        fuel: "Petrol",
        transmission: "Automatic",
        engine: "1496cc",
        body: "Sedan",
        location: "Kurunegala",
        condition: "Used",
        seller: "PROPERTY DEALERS",
        status: "active",
        ownerUid: "",
        image: "",
        icon: "🚙"
    }

];


const STORAGE_KEY = "pd_vehicle_listings_v1";


/* =========================================================
   GET ALL VEHICLES
========================================================= */

export function getVehicles() {

    try {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        if (!saved) {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(DEFAULT_VEHICLES)
            );

            return [...DEFAULT_VEHICLES];

        }


        const parsed =
            JSON.parse(saved);


        if (!Array.isArray(parsed)) {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(DEFAULT_VEHICLES)
            );

            return [...DEFAULT_VEHICLES];

        }


        return parsed;

    }
    catch(error) {

        console.error(
            "Vehicle data error:",
            error
        );

        return [...DEFAULT_VEHICLES];

    }

}


/* =========================================================
   SAVE VEHICLES
========================================================= */

export function saveVehicles(vehicles) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(vehicles)
        );

        return true;

    }
    catch(error) {

        console.error(
            "Could not save vehicles:",
            error
        );

        return false;

    }

}


/* =========================================================
   GET SINGLE VEHICLE
========================================================= */

export function getVehicle(id) {

    const vehicles =
        getVehicles();


    return vehicles.find(
        vehicle =>
            String(vehicle.id) === String(id)
    ) || null;

}


/* =========================================================
   FORMAT PRICE
========================================================= */

export function formatPrice(value) {

    const number =
        Number(value) || 0;


    return "Rs. " +
        number.toLocaleString("en-LK");

}


/* =========================================================
   FORMAT MILEAGE
========================================================= */

export function formatMileage(value) {

    const number =
        Number(value) || 0;


    return number.toLocaleString("en-LK")
        + " km";

}


/* =========================================================
   ADD VEHICLE
========================================================= */

export function addVehicle(vehicle) {

    const vehicles =
        getVehicles();


    vehicles.push(vehicle);


    saveVehicles(vehicles);


    return vehicle;

}


/* =========================================================
   UPDATE VEHICLE
========================================================= */

export function updateVehicle(
    id,
    updates
) {

    const vehicles =
        getVehicles();


    const index =
        vehicles.findIndex(
            vehicle =>
                String(vehicle.id)
                === String(id)
        );


    if(index === -1) {

        return false;

    }


    vehicles[index] = {

        ...vehicles[index],

        ...updates

    };


    saveVehicles(vehicles);


    return true;

}


/* =========================================================
   DELETE VEHICLE
========================================================= */

export function deleteVehicle(id) {

    const vehicles =
        getVehicles();


    const filtered =
        vehicles.filter(
            vehicle =>
                String(vehicle.id)
                !== String(id)
        );


    saveVehicles(filtered);


    return true;

}


/* =========================================================
   SEED DEFAULT DATA
========================================================= */

export function seedVehicles() {

    const existing =
        localStorage.getItem(STORAGE_KEY);


    if(!existing) {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(DEFAULT_VEHICLES)
        );

    }

}


/* =========================================================
   INITIALIZE
========================================================= */

seedVehicles();