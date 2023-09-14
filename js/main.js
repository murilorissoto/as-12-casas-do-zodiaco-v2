  function MudaDesenho(){
        const texto = document.querySelector("h1");
        const texto2 = document.querySelector("h2");
        const imagem = document.querySelector(".img2");
        const mes = document.querySelector("#mes").value;
        const dia = document.querySelector("#dia").value;
        const data = "2023"+"/"+mes+"/"+dia;
        

        if(data>='2023/05/21' && data<='2023/06/21'){
            texto.innerHTML = "Gêmeos";
            imagem.setAttribute("src","img/gemeos.jpg");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo.";
        }

        else if(data>='2023/10/23' && data<='2023/11/21'){
            texto.innerHTML = "Escorpião";
            imagem.setAttribute("src","img/escorpiao.jpg");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "De personalidade por vezes altiva, porem nobre e justo. Durante a caçada aos Cavaleiros de Bronze influenciado pelo Grande Mestre, o Cavaleiro de Escorpião destruíu a Ilha de Andrômeda acreditando que seus habitantes haviam se rebelado contra o Santuário.";
            
        }
        
        else if(data>='2023/02/20' && data<='2023/03/20'){
            texto.innerHTML = "Peixes";
            imagem.setAttribute("src","img/peixes.webp");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Pisces Aphrodite (Afrodite de Peixes), é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. É um poderoso Cavaleiro capaz de gerar e manipular rosas. É um dos Cavaleiros mais poderosos do exército de Atena.";
        }
        else if(data>='2023/08/23' && data<='2023/09/22'){
            texto.innerHTML = "Virgem";
            imagem.setAttribute("src","img/virgem.png");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências. O poder de ir e vir no tempo e espaço impressiona até outros Cavaleiros de Ouro.";
        }
        else if(data>='2023/11/22' && data<='2023/12/21'){
            texto.innerHTML = "Sagitário";
            imagem.setAttribute("src","img/sagitario.jpg");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação. Mesmo gravemente ferido, o Cavaleiro de Sagitário se esforça ao máximo para salvar a bebê Atena do Mestre do Santuário, sendo atacado por muitos de seus colegas no processo.";
        }
        else if(data>='2023/04/21' && data<='2023/05/20'){
            texto.innerHTML = "Touro";
            imagem.setAttribute("src","img/touro.jpg");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Aldebaran (アルデバラン, Aldebaran) é o Cavaleiro de Ouro da Constelação de Touro ( 牡牛座 タウラス , Taurus) durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte.";
        }
        else if(data>='2023/03/21' && data<='2023/04/20'){
            texto.innerHTML = "Áries";
            imagem.setAttribute("src","img/aries.webp");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Aparência. Em Alma de Ouro, o Cavaleiro de Áries permanece muito fiel à sua aparência no anime clássico. Mu é um homem de estatura alta e de pele clara. Possui longos e lisos cabelos lilás claro, olhos verde-escuros e finas sobrancelhas.";
        }
        else if(data>='2023/09/23' && data<='2023/10/22'){
            texto.innerHTML = "Libra";
            imagem.setAttribute("src","img/libra.webp");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Dohko de Libra. O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades.";
        }
        else if(data>='2023/07/22' && data<='2023/08/22'){
            texto.innerHTML = "Leão";
            imagem.setAttribute("src","img/leao.jfif");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Aiolia de Leão (獅子座のアイオリア, Reo no Aioria) é umCavaleiro de Ouro do Século XX, irmão do cavaleiro de Sagitário da mesma época (Aioros), na série Os Cavaleiros do Zodíaco, de Masami Kurumada. É o Cavaleiro de Ouro que protege a Casa de Leão.";
        }
        else if(data>='2023/06/21' && data<='2023/07/21'){
            texto.innerHTML = "Cancêr";
            imagem.setAttribute("src","img/cancer.jfif");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Máscara da Morte é o mais astuto e cruel Cavaleiro de Ouro entre os Cavaleiros de Ouro do Zodíaco. Sua constelação é Câncer, e ele era originalmente o guardião do Templo de mesmo nome, protegendo o caminho para a Câmara Pontifícia e a Estátua de Atenas junto com os outros onze Cavaleiros de Ouro.";
        }
        else if(data>='2023/12/22' && data<='2023/01/20'){
            texto.innerHTML = "Capricórnio";
            imagem.setAttribute("src","img/capricornio.jfif");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio; é o cavaleiro que carrega o poder da espada Excalibur em seu braço direito. Ele é um dos principais personagens de Saint Seiya, sendo um Cavaleiro de Ouro e se considerando o cavaleiro mais fiel à deusa Atena.";
        }
        else if(data>='2023/01/21' && data<='2023/02/19'){
            texto.innerHTML = "Aquário";
            imagem.setAttribute("src","img/capricornio.png");
            imagem.setAttribute("width","700px", "700px");
            texto2.innerHTML = "Camus é uma pessoa estoica e distante, pois ele acredita que os Cavaleiros de Ouro, como os mais fortes entre os protetores de Atena, nunca devem mostrar raiva ou medo, pois isso iria desesperar as pessoas que confiam neles. Camus é conhecido como o mais frio dos doze cavaleiros de ouro, mas sua frieza não é baseada em suprimir seus sentimentos, e sim no controle.";

        }
        else {
            texto.innerHTML = "Cavaleiro não encontrado... =(";
            imagem.setAttribute("src","img/x.webp");
            imagem.setAttribute("width","700px", "700px");
        }
        
    }
        
