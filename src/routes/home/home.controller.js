import API from '~/services/api-service';
import { mapState } from 'vuex';

export default {
    name: "home",
    computed: mapState(['stream']),
    props: {},
    methods: {
        getRandomStream () {
            this.$router.push('/loading');
            this.$store
                .dispatch('setRandomStream')
                .then((res) => {
                    this.$router.push('/stream/' + this.stream.data.stream_name);
                });
        }
    }
};