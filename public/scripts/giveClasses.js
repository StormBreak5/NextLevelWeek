function getClasses() {
    let classes = []
    if (sessionStorage.classes) {
        classes = JSON.parse(sessionStorage.classes)
    }
    
    return classes
}