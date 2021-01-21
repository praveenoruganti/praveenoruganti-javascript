# TaxSolutionTest
 For a recent application I made I was given the following test: 

# Sales Tax Developer Test

Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products
that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of
5%, with no exemptions. Sales tax is always rounded to the nearest £0.05.
When I purchase items I receive a receipt which lists the name of all the items and their price
(including tax), finishing with the total cost of the items, and the total amount of sales taxes paid.
Write an application that prints out the receipt details for a specified shopping basket.

# Sample input/output

**Scenario 1 – Input** 

* 1 book at £12.49
* 1 music CD at £14.99
* 1 chocolate bar at £0.85

**Scenario 1 – Output**

* 1 book: £12.49
* 1 music CD: £16.49
* 1 chocolate bar: £0.85
* Sales Taxes: £1.50
* Total: £29.83

**Scenario 2 – Input**

* 1 imported box of chocolates at £10.00
* 1 imported bottle of perfume at £47.50

**Scenario 2 – Output**

* 1 imported box of chocolates: £10.50
* 1 imported bottle of perfume: £54.65
* Sales Taxes: £7.65
* Total: £65.15

**Scenario 3 – Input**

* 1 imported bottle of perfume at £27.99
* 1 bottle of perfume at £18.99
* 1 packet of headache pills at £9.75
* 1 box of imported chocolates at 11.25

**Scenario 3 – Output**

* 1 imported bottle of perfume: £32.19
* 1 bottle of perfume: £20.89
* 1 packet of headache pills: £9.75
* 1 imported box of chocolates: £11.85
* Sales Taxes: £6.70
* Total: £74.68

On the surface this looked to be a relatively easy problem. I chose to tackle it using Node with Jest for testing and got stuck in. I took a OO approach to try an abstract some of the logic from the surface level and to have as much reusable code as possible. However, it ended up posing some difficult challenges and edge cases. 

They were: 
 
* Rounding to the specified factor 
* No £ sign in the input

The solutions were pretty obvious once I saw my tests failing but I have to admit I didn't spot these cases on first read of the spec. 

Ultimately, the most difficult thing about this kind of question is the inputs and my solution is by no means perfect, although it does match the outputs specified and is relatively time efficient.
In an ideal world, I'd have used googles Vision API to read the receipts then have checked the data it gave back against a database that stores keywords to determine the values. This DB side logic could have an NLP component to ensure that the values brought back were accurate. 
 
As it was just a quick problem I went with a simple regex solution for sorting my inputs. 


