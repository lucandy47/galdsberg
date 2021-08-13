package com.paw.galdsberg.Controllers;

import com.paw.galdsberg.Entities.Order;
import com.paw.galdsberg.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.paw.galdsberg.Services.JwtUtilService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/orders")
public class OrderController {

    @Autowired
    private JwtUtilService jwtUtilService;

    @Autowired
    private OrderService orderService;

    @GetMapping(path = "")
    public List<Order> getAllOrders()
    {
        return orderService.findAllOrders();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> findOrder(@PathVariable int id)
    {
        Order foundOrder = orderService.findOrder(id);
        if(foundOrder != null)
        {
            return new ResponseEntity<>( foundOrder,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(path={"/getOrders"})
    public ResponseEntity<?> findOrdersByEmail(@RequestBody String email)
    {
        List<Order> foundOrders = orderService.findAllOrdersByEmail(email);
        return new ResponseEntity<>(foundOrders, HttpStatus.OK);
    }

    @PostMapping(path = "")
    public ResponseEntity<?> addOrder(@RequestBody Order newOrder)
    {
        orderService.addOrder(newOrder);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable int id)
    {
        orderService.deleteOrder(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<?> updateOrder(@RequestBody Order updatedOrder, @PathVariable int id)
    {
        if(orderService.updateOrder(id, updatedOrder))
        {
            return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
