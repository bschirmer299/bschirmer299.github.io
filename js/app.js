const toggle = document.getElementById('navigation_toggle')
const navigation = document.getElementById('navigation')

toggle.onclick = () => {
    navigation.classList.contains("nav-bar__items-collapse") ? navigation.classList.remove("nav-bar__items-collapse") : navigation.classList.add("nav-bar__items-collapse")
}