import * as BoxIcons from 'react-icons/bi'

export  const sideBarItens = [
            {
                tittle: "",
                icon: <BoxIcons.BiMenu/>,
                link: "/menu",
            },

            {
                tittle: "Página Inicial",
                icon: <BoxIcons.BiHome/>,
                link: "/home"
            },
            {
                tittle: "Pastas",
                icon: <BoxIcons.BiFolderOpen/>,
                link: "/folders"
            },
            {
                tittle: "Calendário",
                icon: <BoxIcons.BiCalendarAlt/>,
                link: "/calendar"
            },
            {
                tittle: "Mensagens",
                icon: <BoxIcons.BiMessageMinus/>,
                link: "/mensagens"
            },
            {
                tittle: "Usuário",
                icon: <BoxIcons.BiUser/>,
                link: "/user"
            },
            {
                tittle: "Sair",
                icon:  <BoxIcons.BiLogOut/>,
                link:  "/loguin"
            },
        ]

console.log(sideBarItens)
