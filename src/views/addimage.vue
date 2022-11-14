<template>
    <form @submit.prevent="handleUpload()">
        <div className="flex min-h-screen flex-col items-center justify-center py-2">

            <input type="file" accept="image/*" @change="onUpload()"
                class="block w-auto text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                id="file_input" required />
            <button type="submit" class="bg-blue-500 mt-5 p-2 rounded-lg">add photo</button>
        </div>

    </form>
</template>

<script setup>
import { supabase } from '../supabase';
import { decode } from 'base64-arraybuffer'

let string = '';
function onUpload() {
    const fileSelector = document.getElementById('file_input')
    let files = fileSelector.files[0];
    let reader = new FileReader();
    reader.onload = function () {
        string = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
        console.log(string)
    },
        reader.readAsDataURL(files)
}
const handleUpload = async () => {
    const fileSelector = document.getElementById('file_input')
    let file = fileSelector.files[0];
    const { data, error } = await supabase.storage.from('recipes')
        .upload('images/' + file.name, decode(string), {
            upsert: true,
            contentType: 'image/*'
        })
    if (data) {
        console.log("success", data)
    } else if (error) {
        console.log("error", error)
    }
    const baseUrl = import.meta.env.VITE_SUPABASE_URL + "/storage/v1/object/public/recipes/" + data.path

    console.log(baseUrl)
}

</script>