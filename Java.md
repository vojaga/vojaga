
# SORTS


 1. `Bubble Sort` (Bublinkové radenie): Jednoduchý algoritmus, ktorý opakovane prechádza zoznamom, porovnáva susedné prvky a vymieňa ich, ak sú v nesprávnom poradí. Je známy svojou jednoduchosťou, ale nie je vhodný pre veľké dátové súbory.

 2. `Selection Sort` (Výberové radenie): Algoritmus prechádza zoznamom, opakovane vyhľadáva najmenší (alebo najväčší) prvok a vymieňa ho s prvkom na aktuálnej pozícii. Tento algoritmus je tiež jednoduchý, ale málo efektívny pre veľké dátové množstvá.

1. `Insertion Sort` (Vkladacie radenie): Buduje zoradený zoznam jeden prvok v danom čase, berúc každý nasledujúci prvok z nezoradeného zoznamu a vkladajúc ho na správnu pozíciu v už zoradenom zozname. Je efektívnejší ako bubble sort a selection sort pre menšie dátové súbory.

2. `Merge Sort` (Zlučovacie radenie): Efektívny, stabilný, porovnávací, vonkajší algoritmus založený na princípe delenia a conqueringu. Zoznam rozdelí na dve polovice, ktoré rekurzívne zoradí a potom zlúči späť do jedného zoradeného celku. Je veľmi efektívny pre veľké dátové súbory.

3. `Quick Sort` (Rýchle radenie): Tiež založený na princípe delenia a conqueringu, vyberie tzv. pivot a prvky rozdelí na menšie ako pivot a väčšie ako pivot, ktoré potom rekurzívne zoradí. Má veľmi dobrú priemernú výkonnosť, ale v najhoršom prípade môže byť pomalý.

4. `Heap Sort` (Haldové radenie): Využíva binárnu haldu na zoradenie prvkov. Je to efektívny algoritmus s dobrou výkonnosťou vo všeobecnosti.
Radix Sort (Rádové radenie): Založený na distribúcii prvkov do zásobníkov podľa ich číslic (radix). Je efektívny pri práci s veľkými číslami alebo dlhými reťazcami.

1. `Tim Sort` Je hybridný sortovací algoritmus založený na Merge Sort a Insertion Sort. Je to štandardný algoritmus používaný pre sortovanie polí a zoznamov v Jave (java.util.Arrays a java.util.Collections).


# final, finally, a finalize

1. `final`
final je kľúčové slovo, ktoré môže byť použité s premennými, metódami alebo triedami.
Keď sa používa s premennou, znamená to, že táto premenná môže byť priradená iba raz a jej hodnota sa nesmie zmeniť `konštanta`.
Keď sa používa s metódou, `zabraňuje tomu, aby bola metóda prepísaná v akýchkoľvek podtriedach`.
Keď sa používa s triedou, `zabraňuje tomu, aby bola trieda rozšírená` (t.j. žiadne iné triedy nemôžu dediť z tejto triedy).

1. `finally`
finally je blok kódu, ktorý nasleduje po `try-catch` blokoch. finally blok sa vykoná po try bloku a po akýchkoľvek catch blokoch, ktoré môžu byť prítomné. Dôležité je, že sa vykoná vždy, bez ohľadu na to, či došlo k výnimke alebo nie. To je užitočné na uvoľnenie zdrojov, ako sú súbory alebo databázové spojenia, ktoré by mali byť uvoľnené bez ohľadu na to, či operácia prebehla úspešne, alebo či nastala chyba.

1. `finalize`
finalize je metóda, ktorá je definovaná v triede Object, z ktorej dedí každá iná trieda v Jave. Táto metóda je volaná `garbage collectorom` predtým, než je objekt odstránený z pamäte. Dáva objektu poslednú šancu uvoľniť zdroje alebo vykonať iné upratovacie činnosti pred tým, ako je úplne odstránený. Avšak jej použitie nie je odporúčané, pretože nemôžete predpovedať, kedy (alebo dokonca či vôbec) bude finalize metóda volaná, čo môže viesť k neočakávanému správaniu a problémom s výkonnosťou.

# interface vs abstract class

1. Abstraktné triedy sú používané na zdieľanie kódu medzi niekoľkými úzko súvisiacimi triedami, keď existujú spoločné metódy alebo polia.

2. Rozhrania definujú kontrakt, ktorý trieda môže implementovať. Sú ideálne na definovanie spoločného rozhrania pre rôzne triedy, ktoré nemusia byť úzko súvisiace.

3. Abstraktné triedy môžu obsahovať konkrétne metódy (s implementáciou) aj abstraktné metódy (bez implementácie). Môžu tiež obsahovať stav v podobe polí.

4. Rozhrania tradične mohli obsahovať iba abstraktné metódy (bez implementácie), ale od Javy 8 môžu obsahovať aj `statické a defaultné metódy s implementáciou`. Rozhrania nemôžu obsahovať stavy (polia musia byť statické a finálne).

5. Abstraktné triedy `môžu mať konštruktory`, ktoré môžu byť použité v konštruktormi podtried.

6. Rozhrania `nemôžu mať konštruktory`, pretože nie sú určené na vytváranie inštancií.

7. Abstraktné triedy sú výhodné, keď mnohé triedy zdieľajú spoločnú implementáciu, ale zároveň sa od seba odlišujú rozšírenými funkciami alebo keď je potrebné zdieľať kód medzi niekoľkými úzko súvisiacimi objektmi.

8. Rozhrania sú preferované, keď je potrebné definovať spoločný kontrakt pre skupinu tried, ktoré môžu pochádzať z rôznych dedičných hierarchií.

> [!NOTE]
> Vo všeobecnosti, voľba medzi abstraktnou triedou a rozhraním závisí od konkrétnej situácie a potrieb dizajnu softvéru. Od Javy 8, s pridaním defaultných a statických metód do rozhraní, sú rozhrania ešte flexibilnejšie a umožňujú implementovať niečo podobné viacnásobnému dedeniu funkcionalít.

# VYNIMKY a THROW

> [!NOTE]
`Throwable` je najvyššia trieda v hierarchii Java výnimiek a chýb. Všetky objekty, ktoré môžu byť hodené (thrown) pomocou throw kľúčového slova a zachytené (caught) musia byť inštanciou Throwable alebo jednej z jeho podtried. Throwable má dve hlavné podtriedy: Error (z ktorých nie sú odvodené bežné aplikácie) a Exception (z ktorých sú odvodené výnimky, s ktorými sa aplikácie môžu stretnúť a ošetriť ich).

----

1. `Checked Exceptions:` Sú to výnimky, ktoré musia byť explicitne ošetrené (zachytené alebo deklarované) v programe. Tieto výnimky naznačujú situácie, kde niečo mimo kontrolu programu môže pôsobiť chyby, napríklad súbor, ktorý sa nepodarí nájsť. Príkladmi checked exceptions sú IOException a SQLException.

2. `Unchecked Exceptions:` Zahŕňajú runtime exceptions (RuntimeException a jej podtriedy) a errors (Error a jeho podtriedy). Tieto výnimky obvykle označujú chyby v logike programu, ktoré by mohli byť predchádzané pred spustením programu. Nevyžadujú explicitné ošetrenie (try-catch) alebo deklarovanie v metódach pomocou throws klauzuly. Príklady zahŕňajú NullPointerException, ArrayIndexOutOfBoundsException, a OutOfMemoryError.

3. `Throw`
Kľúčové slovo throw sa používa na explicitné vyvolanie (hodenie) výnimky. Môžete ho použiť na vyvolanie buď existujúcej inštancie výnimky alebo novej inštancie, ktorú vytvoríte na mieste. Používa sa, keď program narazí na situáciu, ktorú nemôže spracovať:

``` Java

if (x < 0) {
    throw new IllegalArgumentException("x musí byť nezáporné číslo");
}

```

> Rozdiely
- `Throwable` je trieda, ktorá umožňuje objektu byť hodený pomocou throw.
- `Throw`je kľúčové slovo používané na vyvolanie výnimky.
- `Try-Catch` je mechanizmus na ošetrenie výnimiek, ktoré boli vyvolané v programe, čím sa zabezpečí, že program môže bezpečne pokračovať v behu alebo poskytnúť užitočné spätné informácie používateľovi alebo logovacie mechanizmy.


# VLAKNA - paralelne spracovanie

1. Vytvorenie vlákien: V Jave môžete vytvoriť vlákno implementáciou `Runnable` rozhrania alebo rozšírením `Thread` triedy. Po definovaní úlohy ju môžete spustiť v novom vlákne pomocou metódy `start()`.

2. Synchronizácia: Na riadenie prístupu k zdieľaným zdrojom medzi vláknami Java poskytuje kľúčové slovo synchronized, ktoré zabezpečuje, že v danom momente môže blok kódu alebo metódu vykonávať len jedno vlákno.

3. Vláknové pooly: Executor Framework v balíčku java.util.concurrent poskytuje rozhrania a triedy pre riadenie súborov vlákien, známe ako vláknové pooly. Tieto pooly umožňujú efektívnejšie spravovanie vlákien v aplikácii tým, že obmedzujú počet súčasne bežiacich vlákien a znovupoužívajú vlákna pre nové úlohy.

4. Future a Callable: Rozhrania Future a Callable umožňujú prácu s asynchrónnymi výsledkami a môžu vracať hodnotu z vykonávanej úlohy v inom vlákne.

5. Virtuálne vlákna: Navrhnuté tak, aby boli ľahšie ako natívne vlákna OS, virtuálne vlákna by umožnili spúšťanie miliónov vlákien s minimálnym dopadom na výkon, čím by sa výrazne zjednodušilo programovanie s vysokou úrovňou súbežnosti.

6. Struktúrované súbežné programovanie: Tento prístup má za cieľ uľahčiť prácu so súbežnosťou tým, že zabezpečí, aby všetky úlohy spustené v určitom kontexte boli ukončené, predtým než sa tento kontext ukončí, čo zjednodušuje riadenie životného cyklu vlákien.

``` JAVA

// Implementácia rozhrania Runnable
class MyRunnable implements Runnable {
    public void run() {
        // Kód, ktorý chcete vykonať v novom vlákne
    }
}

Runnable myRunnable = new MyRunnable();
Thread thread = new Thread(myRunnable);
thread.start(); // Spustí metódu run() v novom vlákne

```

``` JAVA

// Rozšírenie triedy Thread
class MyThread extends Thread {
    public void run() {
        // Kód, ktorý chcete vykonať v novom vlákne
    }
}

Thread thread = new MyThread();
thread.start(); // Spustí metódu run() v novom vlákne

```
> [!NOTE]
Po spustení vlákna (thread) pomocou metódy `start()` sa automaticky volá metóda `run()` tohto vlákna. Dôležité je použiť metódu `start()` na spustenie vlákna, nie priamo volať `run()`. Priame volanie run() by sa vykonalo v hlavnom vlákne programu, nie v novom vlákne, a tým pádom by nedošlo k paralelnému vykonávaniu kódu.
Metóda `run()` slúži ako vstupný bod pre vykonávanie kódu v novom vlákne, umožňuje paralelné vykonávanie úloh v programe a je základným mechanizmom pre prácu s vláknami v Jave.

# NAVRHOVE VZORY

 - tvorivé (creational) - Tieto vzory sa zameriavajú na mechanizmy tvorby objektov tak, aby sa zvýšila flexibilita a opätovná použiteľnosť existujúceho kódu.
   
 - štrukturálne (structural) - Tieto vzory sa zaoberajú dizajnom a kompozíciou objektov na formovanie väčších štruktúr, pričom zjednodušujú vzťahy medzi objektami.
  
 - zamerane na správanie (behavioral).

### tvorive

>`Singleton`
Zabezpečuje, že trieda má len jednu inštanciu a poskytuje globálny prístupový bod k tejto inštancii.

``` JAVA 
public class Singleton {
    // Jedinečná inštancia triedy Singleton
    private static Singleton instance;

    // Súkromný konštruktor zabraňuje inštancovaniu zvonka
    private Singleton() {}

    // Metóda na získanie inštancie
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}

```
#### Dalsie

- `Factory Method:` Definuje rozhranie pre vytváranie objektu, ale necháva podtriedy rozhodnúť, ktorá trieda sa má inštanciovať. Factory Method umožňuje odložiť inštanciáciu triedy do podtried.

- `Abstract Factory:` Poskytuje rozhranie pre vytváranie rodín príbuzných alebo závislých objektov bez určenia konkrétnych tried.

- `Builder:` Oddeluje konštrukciu zložitého objektu od jeho reprezentácie, takže ten istý konštrukčný proces môže vytvárať rôzne reprezentácie.

- `Prototype:` Umožňuje kopírovať existujúce objekty bez toho, aby kód závisel od ich tried. Toto je užitočné, keď je vytváranie inštancie drahé alebo komplikované.

### strukturalne

>`Adapter`
Umožňuje objektom s nekompatibilnými rozhraniami spolupracovať.

``` JAVA

// Cieľové rozhranie
interface Target {
    void request();
}

// Trieda, ktorá potrebuje adaptáciu
class Adaptee {
    void specificRequest() {
        System.out.println("Specific request.");
    }
}

// Adapter
class Adapter implements Target {
    private Adaptee adaptee = new Adaptee();

    @Override
    public void request() {
        adaptee.specificRequest();
    }
}

```

#### Dalsie

- `Composite:` Kompozitný vzor umožňuje zoskupovať objekty do stromových štruktúr na reprezentáciu hierarchie časť-celok. Kompozit umožňuje klientom jednotne zaobchádzať s jednotlivými objektmi a zloženiami objektov.

- `Facade:` Poskytuje jednotné rozhranie k sade rozhraní v podsystéme. Fasáda definuje vyššie úrovňové rozhranie, ktoré uľahčuje používanie podsystému.

- `Bridge:` Oddeluje abstrakciu od jej implementácie, takže dve môžu variť nezávisle.

- `Decorator:` Pridáva nové funkcie objektom dynamicky bez ovplyvnenia správania iných objektov z tej istej triedy.

### vzory správania (Behavioral Patterns)

> `Observer`
Definuje závislosť typu jeden k mnohým medzi objektami tak, že keď jeden objekt mení svoj stav, všetky jeho závislé objekty sú o tom automaticky informované a aktualizované.

``` JAVA
import java.util.ArrayList;
import java.util.List;

// Predmet
interface Subject {
    void attach(Observer o);
    void detach(Observer o);
    void notifyUpdate(Message m);
}

// Observer
interface Observer {
    void update(Message m);
}

// Konkrétny predmet
class ConcreteSubject implements Subject {
    private List<Observer> observers = new ArrayList<>();

    @Override
    public void attach(Observer o) {
        observers.add(o);
    }

    @Override
    public void detach(Observer o) {
        observers.remove(o);
    }

    @Override
    public void notifyUpdate(Message m) {
        for(Observer o: observers) {
            o.update(m);
        }
    }
}

// Konkrétny observer
class ConcreteObserver implements Observer {
    @Override
    public void update(Message m) {
        System.out.println("Message received: " + m.getContent());
    }
}

// Pomocná trieda pre správy
class Message {
    private String content;

    public Message(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}

```

#### Dalsie

- `Strategy:` Umožňuje definovať rodinu algoritmov, zapuzdriť každý z nich a urobiť ich zamieňateľné. Stratégia umožňuje algoritmu variť nezávisle od klientov, ktorí ho používajú.

- `Command:` Zapuzdruje požiadavku ako objekt, čím umožňuje parametrizovať klientov s rôznymi požiadavkami, frontovými požiadavkami a vykonávať operácie súvisiace s požiadavkami.

- `State:` Umožňuje objektu zmeniť svoje správanie, keď sa zmení jeho vnútorný stav. Objekt bude zdať sa, ako keby zmenil svoju triedu.

- `Mediator:` Mediator funguje tak, že sa stáva centrálnym bodom, cez ktorý prebieha všetka komunikácia. Namiesto toho, aby si objekty volali a komunikovali priamo medzi sebou, posielajú správy mediatoru, ktorý potom rozhoduje, ako tieto správy smerovať alebo aké akcie vykonať. Týmto spôsobom sa logika riadenia komunikácie sústreďuje do jednej triedy, čo zjednodušuje údržbu a rozširovanie systému.

> Na čo sa využíva
Zníženie vzájomnej závislosti medzi triedami: Keďže komunikácia prebieha prostredníctvom mediatora, objekty nemusia mať priamu referenciu na seba, čo znižuje ich vzájomnú závislosť.

> Zjednodušenie údržby a rozšírenia: Prípadné zmeny v komunikačnom modeli si vyžadujú úpravy len v rámci triedy mediatora, nie v každom objekte zúčastnenom na komunikácii.

> Zvýšenie opätovnej použiteľnosti: Objekty môžu byť ľahšie použité v inom kontexte, pretože nezávisia priamo na špecifických triedach iných objektov.

##### Priklad:
``` JAVA

interface Mediator {
    void send(String message, Colleague colleague);
}

abstract class Colleague {
    protected Mediator mediator;

    public Colleague(Mediator mediator) {
        this.mediator = mediator;
    }

    public abstract void send(String message);
    public abstract void receive(String message);
}

class ConcreteMediator implements Mediator {
    private Colleague1 colleague1;
    private Colleague2 colleague2;

    public void setColleague1(Colleague1 colleague1) {
        this.colleague1 = colleague1;
    }

    public void setColleague2(Colleague2 colleague2) {
        this.colleague2 = colleague2;
    }

    @Override
    public void send(String message, Colleague colleague) {
        if (colleague == colleague1) {
            colleague2.receive(message);
        } else {
            colleague1.receive(message);
        }
    }
}

class Colleague1 extends Colleague {
    public Colleague1(Mediator mediator) {
        super(mediator);
    }

    @Override
    public void send(String message) {
        mediator.send(message, this);
    }

    @Override
    public void receive(String message) {
        System.out.println("Colleague1 received: " + message);
    }
}

class Colleague2 extends Colleague {
    public Colleague2(Mediator mediator) {
        super(mediator);
    }

    @Override
    public void send(String message) {
        mediator.send(message, this);
    }

    @Override
    public void receive(String message) {
        System.out.println("Colleague2 received: " + message);
    }
}

// Použitie v kóde
public class Main {
    public static void main(String[] args) {
        ConcreteMediator mediator = new ConcreteMediator();
        Colleague1 colleague1 = new Colleague1(mediator);
        Colleague2 colleague2 = new Colleague2(mediator);

        mediator.setColleague1(colleague1);
        mediator.setColleague2(colleague2);

        colleague1.send("Hello");
        colleague2.send("Hi there!");
    }
}

```

## Obekty vs. primitivne typy

> `Primitívne typy` (ako int, char, double atď.) ukladajú priamo svoje hodnoty. Pri práci s primitívnymi typmi sa operácie vykonávajú nad ich hodnotami. Napríklad, keď porovnávame dve premenné primitívneho typu pomocou operátora ==, porovnávame ich aktuálne hodnoty.

``` JAVA

int a = 10;
int b = 10;
System.out.println(a == b); // Vypíše true, pretože hodnoty sú rovnaké

```

> `Objekty` sú inštancie tried a ukladajú sa ako referencie na pamäťové miesta, kde sú skutočné hodnoty uchovávané. Keď pracujeme s objektmi, operujeme s ich referenciami, nie priamo s hodnotami, ktoré obsahujú. To znamená, že keď porovnávame dva objekty pomocou operátora ==, porovnávame ich referencie (adresy v pamäti), nie hodnoty, ktoré obsahujú.

> [!IMPORTANT]
V Jave sú všetky `objekty` definované `referenciou`. To znamená, že premenná objektu neobsahuje priamo dáta objektu, ale referenciu na miesto v pamäti, kde sú tieto dáta uchovávané. Táto charakteristika je dôležitá pre pochopenie správania objektov, najmä pri prenášaní objektov ako parametrov metód alebo pri ich priradení medzi premenné, kde sa v skutočnosti prenáša len `referencia`, nie `samotné dáta`.

 
``` JAVA

Integer x = new Integer(100);
Integer y = new Integer(100);
System.out.println(x == y); // Vypíše false, pretože x a y sú rôzne referencie (objekty v rôznych pamäťových miestach)

```
> [!TIP]
Ak chceme porovnať, či dva objekty majú rovnakú hodnotu, mali by sme použiť metódu equals(), ktorá je definovaná v triede Object a môže byť prepísaná v potomkoch tejto triedy, aby poskytovala vhodné porovnanie hodnôt.

``` JAVA

String s1 = new String("hello");
String s2 = new String("hello");
System.out.println(s1.equals(s2)); // Vypíše true, pretože metóda equals() porovnáva hodnoty objektov

```

## KOLEKCIE

`List (Zoznam):` Umožňuje ukladať usporiadanú sériu objektov. Objekty môžu byť prístupné podľa ich indexu v zozname. Zoznamy môžu obsahovať duplicitné prvky.
- ArrayList: Implementácia, ktorá umožňuje rýchly náhodný prístup k prvkom. Nie je synchronizovaná.
- LinkedList: Implementácia, ktorá umožňuje efektívne vkladanie a odstraňovanie prvkov. Nie je synchronizovaná.

``` JAVA

List<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");
list.add("C++");

```

`Set (Množina):` Reprezentuje neusporiadanú kolekciu, ktorá neobsahuje duplicitné prvky.
- HashSet: Neusporiadaná množina, kde prístup a manipulácia s prvkami sú rýchle. Nie je synchronizovaná.
- TreeSet: Usporiadaná množina v prirodzenom usporiadaní alebo podľa Comparatoru. Nie je synchronizovaná.

``` JAVA

Set<String> set = new HashSet<>();
set.add("Java");
set.add("Python");
set.add("Java"); // Duplicitný prvok, nebude pridaný

```

`Map (Mapa):` Umožňuje ukladať páry kľúč-hodnota. Kľúč musí byť unikátny, ale hodnoty môžu byť duplicitné.
- HashMap: Neusporiadaná kolekcia. Umožňuje rýchly prístup k prvkám. Nie je synchronizovaná.
- TreeMap: Usporiadaná kolekcia v prirodzenom usporiadaní alebo podľa Comparatoru. Nie je synchronizovaná.

``` JAVA

Map<String, Integer> map = new HashMap<>();
map.put("Java", 8);
map.put("Python", 3);
map.put("C++", 11);

```

`Queue (Fronta):` Kolekcia určená pre držanie prvkov pred ich spracovaním. Pracuje na princípe FIFO (First-In-First-Out), ale existujú aj prioritné fronty, ktoré usporadúvajú prvky podľa priority.
- LinkedList: Môže byť použitá aj ako fronta.
- PriorityQueue: Usporiadáva prvky podľa ich prirodzenej porovnávacej metódy alebo podľa Comparatoru.

``` JAVA

Queue<String> queue = new LinkedList<>();
queue.add("Java");
queue.add("Python");
queue.add("C++");

```
> [!TIP]
`Kolekcie` sú kľúčovým nástrojom v Jave pre prácu s dátami, umožňujú ich ukladať, vyhľadávať, triediť, porovnávať a inak s nimi manipulovať efektívne a flexibilne. Java Collections Framework poskytuje jednotné rozhranie pre rôzne typy dátových štruktúr, čo uľahčuje prácu s nimi a znižuje potrebu implementovať vlastné dátové štruktúry od základov.

## DEDICNOST A REFLEXIA

`Reflexia (Reflection)`
Reflexia v Jave je proces, ktorým je možné za behu programu získať informácie o triedach, rozhraniach, poliach a metódach. Navyše `umožňuje dynamické vytváranie inštancií objektov, volanie metód, prístup k premenným,` atď., a to všetko dynamicky počas behu programu. Reflexia je mocný nástroj, ktorý umožňuje flexibilitu, ale môže mať negatívny vplyv na výkon aplikácie a jej bezpečnosť, preto by sa mala používať uvážene.

``` JAVA

class Demo {
    public void show() {
        System.out.println("Demo::show() method called");
    }
}

public class ReflectionExample {
    public static void main(String[] args) {
        try {
            Class<?> clazz = Class.forName("Demo");
            System.out.println("Názov triedy je: " + clazz.getName());

            // Vytvorenie inštancie
            Object obj = clazz.getDeclaredConstructor().newInstance();

            // Získanie metódy a jej volanie
            Method method = clazz.getDeclaredMethod("show");
            method.invoke(obj);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

```

`Dedičnosť (Inheritance)`
Dedičnosť je základným konceptom objektovo orientovaného programovania, ktorý umožňuje triede dediť vlastnosti (metódy a premenné) z inej triedy. Dedičnosť podporuje znovupoužiteľnosť kódu a realizáciu hierarchie medzi triedami. V Jave sa dedičnosť dosahuje pomocou kľúčového slova extends pre triedy a implements pre rozhrania.

``` JAVA 
// Nadradená (rodičovská) trieda
class Vehicle {
    void move() {
        System.out.println("Vehicle is moving");
    }
}

// Podradená (dieťa) trieda
class Car extends Vehicle {
    void move() {
        super.move(); // Volá metódu move() z triedy Vehicle
        System.out.println("Car is moving");
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.move(); // Vypíše "Vehicle is moving" nasledované "Car is moving"
    }
}

```
> [!NOTE]
Dedičnosť umožňuje "je typom" vzťah medzi nadradenou a podradenou triedou, kde podradená trieda (napr. Car) je špecifickým prípadom nadradenej triedy (napr. Vehicle). Tento mechanizmus umožňuje efektívne zdieľanie a rozširovanie funkcionality medzi triedami.