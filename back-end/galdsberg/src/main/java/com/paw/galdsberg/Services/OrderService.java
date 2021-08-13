package com.paw.galdsberg.Services;

import com.paw.galdsberg.Entities.Order;
import com.paw.galdsberg.Repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order findOrder(Integer id)
    {
        Optional<Order> foundOrder = orderRepository.findById(id);
        if(foundOrder.isPresent())
        {
            return foundOrder.get();
        }
        else{
            return null;
        }
    }

    public List<Order> findAllOrdersByEmail(String email)
    {
        return orderRepository.findByEmail(email);
    }

    public List<Order> findAllOrders()
    {
        return orderRepository.findAll();
    }

    public void addOrder(Order newOrder)
    {
        orderRepository.save(newOrder);
    }

    public void deleteOrder(int id)
    {
        orderRepository.deleteById(id);
    }

    public boolean updateOrder(int id, Order updatedOrder)
    {
        Optional<Order> foundOrder = orderRepository.findById(id);
        if(foundOrder.isPresent())
        {
            foundOrder.get().setEmail(updatedOrder.getEmail());
            foundOrder.get().setFirstName(updatedOrder.getFirstName());
            foundOrder.get().setLastName(updatedOrder.getLastName());
            foundOrder.get().setAddress(updatedOrder.getAddress());
            foundOrder.get().setPhone(updatedOrder.getPhone());
            foundOrder.get().setTotal(updatedOrder.getTotal());

            orderRepository.save(foundOrder.get());
            return true;
        }
        else{
            return false;
        }
    }
}
