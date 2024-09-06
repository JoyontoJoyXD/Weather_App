//------


const snowContainer = document.querySelector(".snow-container");

function createSnowFlake(isCircle){

    let snowDiv = document.createElement("div");

    if(isCircle){

        snowDiv.classList.add("snowCircle");

    }
    else{

        let snowImg = document.createElement("img");

        snowImg.src = "images/snowflake3.svg";

        snowDiv.appendChild(snowImg);

        snowDiv.classList.add("snowFlake");

    }


    snowDiv.style.left = ` ${Math.floor( Math.random()*100 ) }% `;
    snowDiv.style.animation = ` snowAnim ${Math.floor( Math.random()*10+9 ) }s ${Math.floor( Math.random()*10 ) }s linear infinite `;


    snowContainer.appendChild(snowDiv);


}

for(let i=0; i<100; i++){

    createSnowFlake(true);
}

for(let i=0; i<20; i++){

    createSnowFlake(false);
}