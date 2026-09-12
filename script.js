const form =
    document.getElementById("predictionForm");

const predictButton =
    document.getElementById("predictButton");

const prediction =
    document.getElementById("prediction");

const loading =
    document.getElementById("loading");

const error =
    document.getElementById("error");


// Summary elements

const summaryVehicle =
    document.getElementById("summaryVehicle");

const summaryYear =
    document.getElementById("summaryYear");

const summaryMileage =
    document.getElementById("summaryMileage");

const summaryEngine =
    document.getElementById("summaryEngine");


// Music

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

let musicPlaying = false;


// =================================================
// MUSIC
// =================================================

musicButton.addEventListener(
    "click",
    async function () {

        if (!musicPlaying) {

            try {

                await music.play();

                musicPlaying = true;

                musicButton.textContent =
                    "🔊";

            }

            catch (err) {

                console.log(
                    "Music could not start.",
                    err
                );

                alert(
                    "Add a music file to the project first."
                );

            }

        }

        else {

            music.pause();

            musicPlaying = false;

            musicButton.textContent =
                "🔇";

        }

    }
);


// =================================================
// PREDICTION
// =================================================

form.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        // Hide previous error

        error.classList.add(
            "hidden"
        );


        // Show loading

        loading.classList.remove(
            "hidden"
        );


        predictButton.disabled =
            true;


        // -----------------------------------------
        // Get form values
        // -----------------------------------------

        const brand =
            document.getElementById(
                "brand"
            ).value.trim();


        const model =
            document.getElementById(
                "model"
            ).value.trim();


        const year =
            document.getElementById(
                "year"
            ).value;


        const mileage =
            document.getElementById(
                "mileage"
            ).value;


        const engineSize =
            document.getElementById(
                "engine_size"
            ).value;


        const fuelType =
            document.getElementById(
                "fuel_type"
            ).value;


        const transmission =
            document.getElementById(
                "transmission"
            ).value;


        const condition =
            document.getElementById(
                "condition"
            ).value;



        // -----------------------------------------
        // Data for Flask
        // -----------------------------------------

        const carData = {

            brand: brand,

            model: model,

            year: year,

            mileage: mileage,

            engine_size: engineSize,

            fuel_type: fuelType,

            transmission: transmission,

            condition: condition

        };



        // -----------------------------------------
        // Update summary
        // -----------------------------------------

        summaryVehicle.textContent =
            `${brand} ${model}`;


        summaryYear.textContent =
            year;


        summaryMileage.textContent =
            `${Number(
                mileage
            ).toLocaleString()} km`;


        summaryEngine.textContent =
            `${engineSize} L`;



        // -----------------------------------------
        // Send request
        // -----------------------------------------

        try {

            const response =
                await fetch(
                    "/predict",
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify(
                                carData
                            )

                    }
                );


            const data =
                await response.json();



            // Flask returned error

            if (!response.ok) {

                throw new Error(
                    data.error ||
                    "Prediction failed."
                );

            }



            // -------------------------------------
            // Format predicted price
            // -------------------------------------

            const formattedPrice =
                Number(
                    data.prediction
                ).toLocaleString(
                    undefined,
                    {

                        minimumFractionDigits: 2,

                        maximumFractionDigits: 2

                    }
                );



            // -------------------------------------
            // Show prediction
            // -------------------------------------

            prediction.textContent =
                formattedPrice;



        }

        catch (err) {

            console.error(err);


            error.textContent =
                "❌ " + err.message;


            error.classList.remove(
                "hidden"
            );

        }



        // Finish loading

        loading.classList.add(
            "hidden"
        );


        predictButton.disabled =
            false;

    }
);