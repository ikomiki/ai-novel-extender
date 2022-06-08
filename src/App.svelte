<script lang="ts">
    import Dialog from './components/Dialog.svelte'

    let visable: boolean = false;
    let name: string;

    let element = document.getElementById("retryoptions");
    let userLogin = document.querySelector('meta[name="user-login"]')?.getAttribute('content');
    if(userLogin) name = userLogin;
    
    setTimeout(() => visable = true, 1000);

</script>

<Dialog bind:visable>
    <div class="body">
        <strong>Hello, {name}!</strong><br>
        Do good things ❤️
    </div>
</Dialog>

<style>
    .body {
        text-align: center;
    }
</style>
