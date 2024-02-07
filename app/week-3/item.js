export default function Item(Prop){
    return (
        <div>
            <ul>
                <li><strong>Name:</strong> {Prop.name}</li>
                <li><strong>Quantity:</strong> {Prop.quantity}</li>
                <li><strong>Category:</strong> {Prop.category}</li>
            </ul>
        </div>
    );
}
