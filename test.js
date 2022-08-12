function Number() {
    let obj = [];
    for( i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            obj.push(i)
        } 
    }
    return obj;
}