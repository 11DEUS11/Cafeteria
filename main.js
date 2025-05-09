const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; 

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    listItem.classList.add('en-proceso');
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
        listItem.classList.remove('en-proceso');
    }
}

function simulatePreparationTime() {
    return new Promise(resolve => {
        const preparationTime = Math.random() * 4000 + 1000; 
        setTimeout(() => {
            resolve();
        }, preparationTime);
    });
}

async function processOrder(order) {
    updateOrderStatus(order, 'En Proceso');
    await simulatePreparationTime();
    updateOrderStatus(order, 'Completado');
}