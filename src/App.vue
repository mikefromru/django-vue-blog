<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "app",
};

</script>

<style>
.card {
    margin-top: 10px;
}



.paginate-links {
    user-select: none;
    margin: 0;
    padding: 0;

}

.paginate-links li {
    margin: 0 10px;
    display: inline-block;
    font-size: 18px;
}

.paginate-links a {
    cursor: pointer;
}

.paginate-links li.disabled a {
    color: #ccc;
    cursor: no-drop;
}

.paginate-links li.active a {
    font-weight: bold;
}

.paginate-links > li.number > a {
    color: #17A2B8;
}

.paginate-links li.next:before {
    content: ' | ';
    margin-right: 13px;
    color: #ddd;
  }

/* CSS style for card */
ul.paginate-list {
    margin: 0;
    padding: 0;
}

a.router-link-active {
    color: #242424;
}

</style>
