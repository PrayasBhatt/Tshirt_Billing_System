import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean start = true;
        while (start){
            System.out.println("Enter start to start or type quit to quit: ");
            String command = sc.nextLine();

            if(command.equalsIgnoreCase("quit")){
                start = false;
            }else{
                ArrayList <Integer> items = new ArrayList<Integer>();

                System.out.println("Enter userID: ");
                String userID = sc.nextLine();
                System.out.println("Enter password: ");
                String password = sc.nextLine();

                System.out.println("Logged In");

                System.out.println("Enter Number of items");
                int n = sc.nextInt();

                for (int i = 0 ; i < n ; i++ ){
                    System.out.println("Enter price:");
                    int price = sc.nextInt();
                    items.add(price);
                }

                System.out.println("Is VAT to be charged? (true/false)");
                boolean vat = sc.nextBoolean();

                double total = 0;
                for (int i = 0 ; i < n ; i++ ){
                    total = total + items.get(i);
                }


                if (vat == true){

                    total = total * 1.13;
                    System.out.println(total);

                    System.out.println("Is discount to be applied or not ? (true/false)");
                    boolean discount = sc.nextBoolean();

                    if (discount == true){
                        System.out.println("How much discount to be applied ?");
                        double discountvalue = sc.nextInt();
                        total -= total * (discountvalue / 100);
                        System.out.println("Total amount to be paid : " + total);

                      
                    }else {
                        System.out.println("Discount not applied");
                    }

                      System.out.println("Enter the amount of cash you want to give : ");
                        int money = sc.nextInt();

                        if (money > total){
                            money -= total;
                        if (money >= 1000){
                            int a = money / 1000;
                            money = money - (a * 1000);
                            System.out.println("1000 : " + a);
                        }
                        if (money >= 500){
                            int b = money / 500;
                            money = money - (b * 500);
                            System.out.println("5000 : " + b);
                        }
                        if (money >= 100){
                            int c = money / 100;
                            money = money - (c * 100);
                            System.out.println("100 : " + c);
                        }
                        if (money >= 50){
                            int d = money / 50;
                            money = money - (d * 50);
                            System.out.println("50 : " + d);
                        }
                        if (money >= 20){
                            int e = money / 20;
                            money = money - (e * 20);
                            System.out.println("20 : " + e);
                        }
                        if (money >= 10){
                            int f = money / 10;
                            money = money - (f * 10);
                            System.out.println("10 : " + f);
                        }
                        if (money >= 5){
                            int g = money / 5;
                            money = money - (g * 5);
                            System.out.println("5 : " + g);
                        }
                        if (money >= 2){
                            int h = money / 2;
                            money = money - (h * 2);
                            System.out.println("2 : " + h);
                        }
                        if (money >= 1){
                            int j = money / 1;
                            money = money - (j * 1);
                            System.out.println("1 : " + j);
                        }
                        }
                }else{
                    System.out.println("VAT not charged");
                }


            }

        }
    }
}
