const defineValue = (material, value) => {
    if(material){
        return value;
    }else{
        switch(value){
            case 'Outlined':
                return 'Outline';
            case 'Standard':
                return 'Underlined';
            default:
                return value;
        }
    }
}

export { 
    defineValue
}
