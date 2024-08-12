def gera(numero):
    for j in range(numero, 0, -1):
        linha = ' '.join([str(j)] * (numero - j + 1))
        print(linha.center(2 * numero - 1))

def main():
    try:
        numero = int(input("Digite um número de sua escolha: "))
        if numero < 1:
            raise ValueError("O número deve ser maior que 0.")
        gera(numero)
    except ValueError as e:
        print(f"Erro: {e}")

if __name__ == "__main__":
    main()
