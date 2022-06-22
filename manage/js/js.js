let user = []
async function getUser() {
    try {
        let data = await axios.get("https://jsonplaceholder.tyicode.com/users")
        user = data.data
        renderUser()
    } catch (e) {
        console.log(e)
    }
}

function renderUser() {
    let element = <tr>
        <th>#</th>
        <th>Mã sản phẩm</th>
        <th>Tên sản phẩm</th>
        <th>Giá bán</th>
        <th>Ảnh</th>
        <th>Trạng thái</th>
    </tr>
    user.map(value => {
        element += <tr>
            <td>$(value.)</td>
        </tr>
    })
}