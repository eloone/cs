---
layout: default
title:  "Maths"
nav:
  - { anchor: "log", title: "Logarithm" }
  - { anchor: "powers", title: "Powers" }
  - { anchor: "combo", title: "Combinations" }
  - { anchor: "permutations", title: "Permutations" }
  - { anchor: "exp", title: "Exponential" }
---

<nav class="page-nav">
{% for item in page.nav %}
<a href="#{{ item.anchor }}">{{ item.title }}</a>
{% endfor %}
</nav>

<a name="log"></a>
##Logarithm 

$$ln(MN) = ln(M) + ln(N)$$ 
$$ln(1) = 0$$
$$ln(a^N) = Nln(a)$$

$$ln(1/N) = -ln(N)$$ 
$$ln(M/N) = ln(M) - ln(N)$$
$$ln(e) = 1$$

$$log\_a(N) = {ln(N)}/{ln(a)}$$
$$log\_a(a)=1$$
$$log\_a(a^N)=N$$

$$a^{log\_a(N)} = N$$
$$log\_2(2)=1$$
$$log\_2(2^N)=N$$

$$log\_a(N) = M  ⇔ N = a^M$$

$$log\_10(N) = log(N)$$
$$ln(2)= 0.7$$
$$e= 2.71$$

<br/><br/>
![Alt LN graphs]({{site.baseurl}}/assets/img/ln.png)

<a name="powers"></a>
##Powers

$$a^Na^M = a^(N+M)$$
$$a^N/a^M = a^(N-M)$$
$$a^{-N} = 1/a^N$$

$$(a^N)^M = a^(NM)$$
$$(ab)^N = a^Nb^N$$

<div class="stabilo">
$$2^3 = 8$$
$$2^4 = 16$$
$$2^5 = 32$$
$$2^6 = 64$$
$$2^7 = 128$$
$$2^8 = 256$$
</div>
<br>

<a name="combo"></a>
##Combinations 

###no order + no repetition

$$(\table n ;p)$$
=> choose ```p``` objects among ```n``` distincts objects with no particular order<br>

$$(\table n ;p) = n!/{p!(n - p)!}$$ = number of possibilities of combinations of ```p``` elements picked among ```n``` elements

ex: (1,2) (1,3) (3,2) in (1,2,3)
$$(\table 3 ;2) = 3!/{2!1!} = 3$$

<div class="stabilo">
$$3! = 6$$
$$4! = 24$$
$$5! = 120$$
$$6! = 720$$
</div>
<br>
###no order + repetition

$$(\table n + p -1 ;p) = (\table n + p - 1 ; n -1) = (n + p -1)!/{p!(n - 1)!}$$

ex : (1,1), (2,1), (2,2) etc in (1,2,3) => $$(\table 3 + 2 -1 ;2) = (\table 4 ;2) = 4! /{2!2!} = 6$$

<a name="permutations"></a>
##Permutations

###order + no repetition

$$n! / (n - p)!$$ = nb of possibilities when choosing ```p``` elements among ```n``` distincts elements with order

ex: retrieve 3 elements from list of 5

###order + repetition

$$n^p$$ = nb of possibilities when choosing ```p``` elements from ```n``` elements

ex: (1,2), (2,1), (3, 1), (1, 3), (2, 3), (3, 2), (3, 3), (2, 2), (1, 1) in (1,2,3) => $$3^2 = 9$$

<http://www.mathsisfun.com/combinatorics/combinations-permutations.html>

<a name="exp"></a>
##Exponential 

$$e^{ln(N)} = N$$
$$ln(e^N) = N$$
$$e^(N+M) = e^Ne^M$$

<a name="seq"></a>
##Sequences

Arithmetic sequence

$$U\_{n+1} = U\_n + r$$

$$∑↙{k=0}↖n U\_k =  (U\_0 + U\_n ) * (n + 1) /1$$
