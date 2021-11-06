export const state = () => ({
    theme: 'theme-dark',
    loading: false
});

export const actions = {
    changeTheme({ commit }, theme) {
        commit('setTheme', theme);
    },
    loading({ commit }, loading) {
        commit('setLoading', loading);
    }
}

export const mutations = {
    setTheme(state, theme) {
        state.theme = theme;
    },
    setLoading(state, loading) {
        state.loading = loading;
    }
}