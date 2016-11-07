<template id="template-star-rating">
    <div class="star-rating">
        <label
                class="star-rating__star"
                v-for="rating in ratings"
                v-bind:class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
                v-on:mouseout="star_out"
                v-on:click="set(rating)">
            <input
                    class="star-rating star-rating__checkbox"
                    type="radio"
                    v-bind:name="name"
                    v-bind:value="rating"
                    v-bind:required="required"
                    v-bind:disabled="disabled"
                    v-model="value">
            <i class="fa fa-star" aria-hidden="true"></i>
        </label>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                temp_value: null,
                ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            };
        },
        props: {
            'name': String,
            'value': null,
            'id': String,
            'disabled': String,
            'required': Boolean,
        },
        methods: {
            star_out: function() {
                if (this.disabled=="true") {
                    return;
                }

                this.value = this.temp_value;
            },
            set: function(value) {
                if (this.disabled=="true") {
                    return;
                }

                this.temp_value = value;
                this.value = value;
            }
        }
    }

</script>
<style>
    .star-rating__checkbox {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
    }

    .star-rating__star {
        display: inline-block;
        padding: 2px;
        vertical-align: middle;
        line-height: 1;
        font-size: 1.5em;
        color: #ABABAB;
        -webkit-transition: color;
        transition: color;
    }
    .star-rating__star:hover {
        cursor: pointer;
    }
    .star-rating__star.is-selected {
        color: #28d6ac;
    }
    .star-rating__star.is-disabled:hover {
        cursor: default;
    }

</style>