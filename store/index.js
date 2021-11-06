export const state = () => ({
    theme: 'theme-dark',
});

export const actions = {
    changeTheme({ commit }, theme) {
        commit('setTheme', theme);
    },
}

export const mutations = {
    setTheme(state, theme) {
        state.theme = theme;
    },
}