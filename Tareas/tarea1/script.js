var canales=[ 
    { canal:"Fuera JOH", 
    descripcion:"Canal de videos de marchas"}, 
    {canal:"Anime Cool", 
    descripcion:"Canal de videos de animes coooool" }
]

var videos = [
    {
        titulo:"Marcha de las antorchas Por Corrupcion en Honduras",
        urlCaratula:"img/1.jpg", 
        canal:"Fuera JOH", 
        visualizaciones:"19k",
        duracion:"35:25",
        subido:"19 hours ago"
    },
    {
        titulo:"Attack On Titan - Capitulo 10 - Subtitulos español",
        urlCaratula:"img/2.jpg", 
        canal:"Anime Cool", 
        visualizaciones:"35k",
        duracion:"25:03",
        subido:"3 hours ago"
    },
    {
        titulo:"Attack On Titan - Capitulo 11 - Subtitulos español",
        urlCaratula:"img/3.jpg", 
        canal:"Anime Cool", 
        visualizaciones:"30k",
        duracion:"24:05",
        subido:"10 hours ago"
    },
    {
        titulo:"Dragon Ball Super capitulo 130 - Español Latino",
        urlCaratula:"img/4.jpg", 
        canal:"Anime Cool", 
        visualizaciones:"123k",
        duracion:"20:10",
        subido:"15 hours ago"
    },
    {
        titulo:"Epica - Universal Death Squad",
        urlCaratula:"img/5.jpg", 
        canal:"Epica", 
        visualizaciones:"222k",
        duracion:"03:25",
        subido:"15 hours ago"
    },
    {
        titulo:"Don't Stop me Now",
        urlCaratula:"img/6.jpg", 
        canal:"Queen", 
        visualizaciones:"25M",
        duracion:"04:10",
        subido:"10 years ago"
    },
    {
        titulo:"UnSun - The End Of Life",
        urlCaratula:"img/7.jpg", 
        canal:"UnSun", 
        visualizaciones:"25k",
        duracion:"3:44",
        subido:"24 hours ago"
    },
]



function RenderPosts(){
    postContainer = document.getElementById("postContainer");
    for(video of videos){
        postContainer.innerHTML += `<div class="col col-12 col-sm-4 col-md-3 col-lg-2">
                                        <div class="card ">
                                            <div class="imageVideo1" alt="Card image cap" style="background-image: url(${video.urlCaratula});">
                                                <div class="title"><small>${video.titulo}</small></div>
                                                <div class="durVideo">${video.duracion}</div>

                                            </div>
                                            <div class="card-body">
                                                <h class="card-title"> <strong> ${video.titulo}</strong></h5>
                                                <div><small>${video.canal}</small></div>
                                                <div><small>${video.visualizaciones} views|${video.subido}</small></div>
                                                
                                            </div>
                                        </div>
                                    </div>`
    }
}



function render(){
    uploadVideo = document.getElementById("uploadVideo");
uploadVideo.innerHTML =   ` `;
}

RenderPosts();


