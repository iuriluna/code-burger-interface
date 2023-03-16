import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../Constants/path'

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: LocalMallIcon
    },
    {
        id: 2,
        label: 'Listar Produtos',
        link: paths.Products,
        icon: ShoppingCartIcon
    },
    {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: CreateNewFolderIcon
},

]

export default listLinks