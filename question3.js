//3. Create an image element. When the image is fully loaded, display an alert saying "Image loaded!" (Event: load).

const image = document.getElementById("image")
image.addEventListener("load",()=>{
    alert("Image Loaded!")
})