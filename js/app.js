    let amigos = [];

    //adicionar amigos inseridos em um array
    function adicionar() {
        let amigoAdd = document.getElementById('nome-amigo');
        if (amigoAdd.value == '') {
            alert ('Insira o nome do Amigo!');
            return;
        }
        let lista = document.getElementById('lista-amigos');
        amigos.push(amigoAdd.value);
        if (lista.textContent == '') {
            lista.textContent = amigoAdd.value;
        } else {
            lista.textContent = lista.textContent + ', ' + amigoAdd.value;
        }
        console.log(amigos);
    }

    function sortear () {
        embaralharArray(amigos)
        let sorteio = document.getElementById('lista-sorteio');
        //esvaziar lista do sorteio antes de iniciar novo sorteio
        sorteio.innerHTML = '';

        if (amigos.length < 2){
            alert ('Adicionar mais de 2 amigos');
            return
        }
        
        for (let i = 0; i < amigos.length; i++){
            if (i === amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + amigos [i] + '-->' + amigos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos [i] + '-->' + amigos[i+1] + '<br>';
            }
        }
    }

    function reiniciar () {
        amigos = [];
        document.getElementById('nome-amigo').innerHTML = '';
        document.getElementById('lista-amigos').innerHTML = '';
        document.getElementById('lista-sorteio').innerHTML = '';
    }

    function embaralharArray(array) {
        // Algoritmo de Fisher-Yates (Knuth Shuffle)
        let currentIndex = array.length;
    
        // Enquanto ainda houver elementos para embaralhar...
        while (currentIndex !== 0) {
        // Escolhe um índice aleatório...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // E troca com o elemento atual.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
        }
    
        return array;
    }

