# Sistema de Coleta Inteligente

O **Sistema de Coleta Inteligente** é uma solução tecnológica para otimizar o processo de coleta de lixo urbano. Ele visa melhorar a eficiência da gestão de resíduos utilizando tecnologia de sensores, análise de dados e integração com sistemas de monitoramento em tempo real. O sistema permite gerar relatórios detalhados sobre os recursos gastos, emissão de carbono, geração de resíduos, entre outros aspectos relacionados à coleta.

Este repositório oferece apenas os componentes visuais da **interface de administração** do sistema, permitindo a visualização e análise de dados. Esses componentes visuais foram projetados em conjunto e com a intenção de serem integrados com o backend e o aplicativo mobile, que processam e fornecem os dados necessários através de diversos endpoints.

## Funcionalidades


### 1. **Interface de Administração**
   - Interface simples e intuitiva para gerenciar relatórios e visualizar dados sobre a coleta de lixo.
   - Permite que os administradores visualizem, modifiquem e analisem relatórios de forma rápida.

![Captura de Tela (5)](https://github.com/user-attachments/assets/ee9054c9-0278-458e-a776-ed8c20507cf1)
### 2. **Relatório de Distância Percorrida por Caminhão**
   - Exibe a distância percorrida por cada caminhão de lixo em um determinado período.
   - Permite o acompanhamento da eficiência das rotas e a gestão dos recursos de forma mais eficaz.

![Captura de Tela (7)](https://github.com/user-attachments/assets/e5af40ec-29d5-4a05-bd38-d2fa5fdddc89)
### 3. **Relatório de Resíduos por Área**
   - Apresenta gráficos sobre a quantidade de resíduos gerados em diferentes áreas da cidade.
   - Facilita a análise e a tomada de decisões para uma coleta mais eficiente e sustentável.

![Captura de Tela (9)](https://github.com/user-attachments/assets/6b6a38c0-b74b-410f-8c61-721f47778d08)
### 4. **Relatório de Recursos Gasto (Combustível)**
   - Mostra o gasto de combustível por caminhão ao longo da semana.
   - Permite otimizar as rotas e a operação de caminhões, reduzindo custos operacionais.

![Captura de Tela (8)](https://github.com/user-attachments/assets/acb0b2d3-0329-4e3c-a9f2-95dc0c775bfc)
### 5. **Emissão de Carbono**
   - Calcula e exibe a quantidade de carbono emitido durante a coleta de lixo.
   - Ajuda a promover práticas mais ecológicas e sustentáveis na gestão de resíduos.

![Captura de Tela (6)](https://github.com/user-attachments/assets/d6ccf455-83b3-4153-9f3f-600b9b316a11)

## Tecnologias Utilizadas

- **Frontend:**
  - **Next.js**: Framework React para a construção de interfaces dinâmicas e responsivas.
  - **Tailwind CSS**: Framework de CSS para estilização rápida e responsiva.

## Como Executar

Para rodar o frontend do sistema, siga as instruções abaixo:

```bash
# Instale as dependências
npm install

# Execute o projeto
npm run dev
